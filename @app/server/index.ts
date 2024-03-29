import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import type { Socket } from "socket.io";
import { Pokemon, PokemonClient } from "pokenode-ts";
import type {
  Connection,
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData,
} from "@poke2mon/types";
import { randomUUID } from "crypto";
import { timerMax } from "@poke2mon/data";
import pokemonNames from "@poke2mon/data/dist/pokemon";
import { setDisconnectEvent, setPokemonEvent } from "./events";
import { prettifyPokemonName } from "./text";

type Game = {
  id: string;
  previousPokemon: Pokemon;
  usedPokemon: string[];
  connections: Connection[];
  players: string[];
  timer: NodeJS.Timeout | undefined;
};

export type Db = { [key: string]: Game };

export type MySocket = Socket<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>;

export const api = new PokemonClient();

//const app = express();
//const httpServer = createServer(app);
const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(
  /*httpServer,*/ {
    cors: {
      origin: process.env.CLIENT_URL || "http://127.0.0.1:5173",
    },
  }
);

const db: Db = {};

io.on("connection", async (socket) => {
  console.log(`connected to socket ${socket.id}`);

  socket.on("play", async () => {
    await joinGame(db, socket);
  });

  setDisconnectEvent(db, socket, io);
  setPokemonEvent(db, socket);
});

const url = process.env.RAILWAY_PUBLIC_DOMAIN
  ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}:${process.env.PORT || 3000}`
  : "http://localhost:3000";

/*httpServer.listen(3000, () => {
  console.log(`socket.io server listening at ${url}`);
});*/
io.listen(Number(process.env.PORT || 3000));
console.log(`socket.io server listening at ${url}`);

const getRandomPokemon = (): string => {
  const pokemonNamesKeys = Object.keys(pokemonNames);
  const randomIndex = Math.floor(Math.random() * pokemonNamesKeys.length);
  const pokemon = pokemonNamesKeys[randomIndex];
  return pokemon || "pikachu";
};

const joinGame = async (db: Db, socket: MySocket) => {
  try {
    // Find game to join, if not, create a game
    const existingGameId = findGameToJoin();
    if (existingGameId && db[existingGameId]) {
      db[existingGameId]!!.players.push(socket.id);
      socket.join(existingGameId);
      socket.data.gameId = existingGameId;

      const startingPokemon = db[existingGameId]?.usedPokemon[0];
      const prettyStartingPokemon = prettifyPokemonName(
        startingPokemon || "pikachu"
      );

      const thisPlayerStarts = Math.random() > 0.5;
      socket.broadcast.in(socket.data.gameId).emit("gameStart", {
        isStartingPlayer: !thisPlayerStarts,
        startingPokemon: prettyStartingPokemon,
      });
      socket.emit("gameStart", {
        isStartingPlayer: thisPlayerStarts,
        startingPokemon: prettyStartingPokemon,
      });
      db[existingGameId]!!.timer = startTimer(
        db[existingGameId]!!.timer,
        socket,
        thisPlayerStarts
      );
    } else {
      const newGameId = randomUUID();
      const startingPokemon = getRandomPokemon();
      db[newGameId] = {
        id: newGameId,
        previousPokemon: await api.getPokemonByName(startingPokemon),
        usedPokemon: [startingPokemon],
        connections: [],
        players: [socket.id],
        timer: undefined,
      };
      socket.join(newGameId);
      socket.data.gameId = newGameId;
    }
  } catch (error) {
    console.log(error);
  }
};

const findGameToJoin = () => {
  for (const game of Object.values(db)) {
    if (game.players.length === 1) {
      return game.id;
    }
  }
  return null;
};

export const startTimer = (
  previous: NodeJS.Timeout | undefined,
  socket: MySocket,
  socketLoses: boolean
): NodeJS.Timeout => {
  if (previous) {
    clearTimeout(previous);
  }
  return setTimeout(() => {
    socket.broadcast.in(socket.data.gameId).emit("gameEnd", socketLoses);
    socket.emit("gameEnd", !socketLoses);

    io.in(socket.data.gameId).socketsLeave(socket.data.gameId);

    delete db[socket.data.gameId];
  }, (timerMax + 1) * 1000);
};

/*
const createListOfPokemon = async () => {
  const pokemonList: { [key: string]: string } = {};
  let continuing = true;
  let id = 10001;
  while (continuing) {
    try {
      const data = await api.getPokemonById(id);
      pokemonList[data.name] = capitalizeAndRemoveDashes(data.name);
      console.log(`${data.id}: ${data.name}`);
      id++;
    } catch (error) {
      continuing = false;
    }
  }
  fs.writeFileSync("pokemon2.json", JSON.stringify(pokemonList));
};

createListOfPokemon();
*/

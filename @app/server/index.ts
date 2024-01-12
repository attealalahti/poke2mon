import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import type { Socket } from "socket.io";
import { Pokemon, PokemonClient } from "pokenode-ts";
import pokemonNames from "@poke2mon/data/dist/pokemon";
import type {
  Connection,
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData,
} from "@poke2mon/types";
import { pokemonParameterValidator } from "@poke2mon/types";
import { randomUUID } from "crypto";
import { timerMax } from "@poke2mon/data";

type Game = {
  id: string;
  previousPokemon: Pokemon;
  usedPokemon: string[];
  connections: Connection[];
  players: string[];
  timer: NodeJS.Timeout | undefined;
};

type MySocket = Socket<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>;

const app = express();
const httpServer = createServer(app);
const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(httpServer, {
  cors: {
    origin: "http://127.0.0.1:5173",
  },
});

// Removes dashes between each word and capitalizes each word
const prettify = (text: string) => {
  const split = text.split("-");
  const capitalized = split.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const rest = word.slice(1);
    return firstLetter + rest;
  });
  const joined = capitalized.join(" ");
  return joined;
};

// Same as prettify but includes exceptions for specific Pokemon
const prettifyPokemonName = (name: string): string => {
  const prettyName = pokemonNames[name];
  if (prettyName) {
    return prettyName;
  } else {
    return name;
  }
};

const startingPokemon = "rotom-wash";
const prettyStartingPokemon = prettifyPokemonName(startingPokemon);

const db: { [key: string]: Game } = {};

const api = new PokemonClient();

io.on("connection", async (socket) => {
  console.log(`connected to socket ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`${socket.id} socket disconnected`);
    setTimeout(() => {
      if (!socket.connected) {
        if (socket.data.gameId) {
          socket.broadcast.in(socket.data.gameId).emit("opponentDisconnected");
          delete db[socket.data.gameId];
        }
      }
    }, 8000);
  });

  try {
    // Find game to join, if not, create a game
    const existingGameId = findGameToJoin();
    if (existingGameId && db[existingGameId]) {
      db[existingGameId]!!.players.push(socket.id);
      socket.join(existingGameId);
      socket.data.gameId = existingGameId;

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

    socket.on("pokemon", async (name, callback) => {
      const game = db[socket.data.gameId];
      if (!game) {
        callback({ error: true, errorMessage: "404 - Game missing" });
        return;
      }

      try {
        pokemonParameterValidator.parse(name);

        const newPokemon = await api.getPokemonByName(name);
        const newConnections = findConnections(
          game.previousPokemon,
          newPokemon
        );

        if (newConnections.length === 0) {
          // No connections: send error
          callback({
            error: true,
            errorMessage: `${prettifyPokemonName(
              newPokemon.name
            )} - No connections found`,
          });
          return;
        }

        if (game.usedPokemon.includes(newPokemon.name)) {
          callback({
            error: true,
            errorMessage: `${prettifyPokemonName(
              newPokemon.name
            )} - Pokemon already used`,
          });
          return;
        }

        const gameConnections: Connection[] = [];
        const connectionsToSend: Connection[] = [];
        for (const connection of game.connections) {
          if (newConnections.includes(connection.name)) {
            if (connection.count >= 3) {
              // Connection used three times already: send error
              callback({
                error: true,
                errorMessage: `${connection.name} - Connection used too many times`,
              });
              return;
            } else {
              const newConnection = {
                name: connection.name,
                count: connection.count + 1,
              };
              gameConnections.push(newConnection);
              connectionsToSend.push(newConnection);
            }
          } else {
            gameConnections.push({ ...connection });
          }
        }
        for (const newConnectionName of newConnections) {
          if (
            !game.connections.find(
              (connection) => connection.name === newConnectionName
            )
          ) {
            const newConnection = {
              name: newConnectionName,
              count: 1,
            };
            gameConnections.push(newConnection);
            connectionsToSend.push(newConnection);
          }
        }
        sortConnections(gameConnections);
        sortConnections(connectionsToSend);

        game.usedPokemon.push(newPokemon.name);
        game.previousPokemon = newPokemon;
        game.connections = gameConnections;

        const prettyPokemonName = prettifyPokemonName(newPokemon.name);
        callback({
          error: false,
          pokemon: prettyPokemonName,
          connections: connectionsToSend,
        });
        socket.broadcast.in(socket.data.gameId).emit("opponentTurn", {
          pokemon: prettyPokemonName,
          connections: connectionsToSend,
        });
        db[socket.data.gameId]!!.timer = startTimer(
          db[socket.data.gameId]?.timer,
          socket,
          false
        );
      } catch (error) {
        callback({
          error: true,
          errorMessage: `Invalid Pokemon ${name}`,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

httpServer.listen(3000);
console.log("socket.io server listening on http://localhost:3000");

const findGameToJoin = () => {
  for (const game of Object.values(db)) {
    if (game.players.length === 1) {
      return game.id;
    }
  }
  return null;
};

const startTimer = (
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

    delete db[socket.data.gameId];
  }, (timerMax + 1) * 1000);
};

// Sort connections by type of connection and connection count
const sortConnections = (connections: Connection[]): void => {
  connections.sort(
    (a, b) => getOrderByFirstLetter(a.name) - getOrderByFirstLetter(b.name)
  );
  connections.sort((a, b) => b.count - a.count);
};

// Helper function for sorting Type -> Ability -> Move
const getOrderByFirstLetter = (word: string) => {
  if (word.charAt(0) === "T") {
    return 1;
  } else if (word.charAt(0) === "A") {
    return 2;
  } else {
    return 3;
  }
};

const findConnections = (previous: Pokemon, current: Pokemon) => {
  const connections: string[] = [];

  // Type
  const previousTypes = previous.types.map((pokeType) => pokeType.type.name);
  const currentTypes = current.types.map((pokeType) => pokeType.type.name);

  if (
    previousTypes.every((type) => currentTypes.includes(type)) &&
    currentTypes.every((type) => previousTypes.includes(type))
  ) {
    const types = previousTypes.sort().map((type) => prettify(type));
    const fullType = types.join(" / ");
    connections.push(`Type: ${prettify(fullType)}`);
  }

  // Abilities
  const previousAbilities = previous.abilities.map(
    (pokeAbility) => pokeAbility.ability.name
  );
  const currentAbilities = current.abilities.map(
    (pokeAbility) => pokeAbility.ability.name
  );

  for (const ability of previousAbilities) {
    if (currentAbilities.includes(ability)) {
      connections.push(`Ability: ${prettify(ability)}`);
    }
  }

  // Moves
  const previousMoves = previous.moves
    .filter(
      (pokeMove) =>
        pokeMove.version_group_details[
          pokeMove.version_group_details.length - 1
        ]?.move_learn_method.name === "level-up"
    )
    .map((pokeMove) => pokeMove.move.name);
  const currentMoves = current.moves
    .filter(
      (pokeMove) =>
        pokeMove.version_group_details[
          pokeMove.version_group_details.length - 1
        ]?.move_learn_method.name === "level-up"
    )
    .map((pokeMove) => pokeMove.move.name);

  for (const move of previousMoves) {
    if (currentMoves.includes(move)) {
      connections.push(`Move: ${prettify(move)}`);
    }
  }

  return connections;
};

const test = async () => {
  try {
    const poke1 = await api.getPokemonByName("pikachu");
    const poke2 = await api.getPokemonByName("rotom-wash");
    const connections = findConnections(poke1, poke2);
    console.log(connections);
  } catch (error) {
    console.log(error);
  }
};
//test();

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

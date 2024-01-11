import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { Pokemon, PokemonClient } from "pokenode-ts";
import pokemonNames from "@poke2mon/data";

type Connection = {
  name: string;
  count: number;
};

type Game = {
  previousPokemon: Pokemon;
  usedPokemon: string[];
  connections: Connection[];
};

type Db = {
  [key: string]: Game;
};

type ServerToClientEvents = {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
};

type ClientToServerEvents = {
  pokemon: (
    name: string,
    callback: (
      value:
        | { error: false; pokemon: string; connections: Connection[] }
        | { error: true; errorMessage: string }
    ) => void
  ) => void;
};

type InterServerEvents = {};

type SocketData = {
  gameId: string;
};

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

const db: Db = {};

const api = new PokemonClient();

io.on("connection", async (socket) => {
  console.log(`connected to socket ${socket.id}`);

  try {
    const game: Game = {
      previousPokemon: await api.getPokemonByName("pikachu"),
      usedPokemon: ["pikachu"],
      connections: [],
    };

    socket.on("pokemon", async (name, callback) => {
      try {
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

        callback({
          error: false,
          pokemon: prettifyPokemonName(newPokemon.name),
          connections: connectionsToSend,
        });
      } catch (error) {
        //console.log(error);
        callback({ error: true, errorMessage: `Invalid Pokemon ${name}` });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

httpServer.listen(3000);
console.log("socket.io server listening on http://localhost:3000");

const sortConnections = (connections: Connection[]): void => {
  connections.sort(
    (a, b) => getOrderByFirstLetter(a.name) - getOrderByFirstLetter(b.name)
  );
  connections.sort((a, b) => b.count - a.count);
};

const getOrderByFirstLetter = (word: string) => {
  if (word.charAt(0) === "T") {
    return 1;
  } else if (word.charAt(0) === "A") {
    return 2;
  } else {
    return 3;
  }
};

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

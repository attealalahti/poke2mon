import type { Db, MySocket } from "./index";
import { api, startTimer } from "./index";
import { pokemonParameterValidator } from "@poke2mon/types";
import type { Connection } from "@poke2mon/types";
import { prettifyPokemonName } from "./text";
import { findConnections, sortConnections } from "./connections";
import type { Server } from "socket.io";
import {
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData,
} from "@poke2mon/types";

type MyServer = Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>;

export const setDisconnectEvent = (db: Db, socket: MySocket, io: MyServer) => {
  socket.on("disconnect", () => {
    console.log(`${socket.id} socket disconnected`);
    setTimeout(() => {
      if (!socket.connected && socket.data.gameId) {
        socket.broadcast.in(socket.data.gameId).emit("opponentDisconnected");
        io.in(socket.data.gameId).socketsLeave(socket.data.gameId);
        delete db[socket.data.gameId];
      }
    }, 8000);
  });
};

export const setPokemonEvent = (db: Db, socket: MySocket) => {
  socket.on("pokemon", async (name, callback) => {
    const game = db[socket.data.gameId];
    if (!game) {
      callback({ error: true, errorMessage: "404 - Game missing" });
      return;
    }

    try {
      pokemonParameterValidator.parse(name);

      const newPokemon = await api.getPokemonByName(name);
      const newConnections = findConnections(game.previousPokemon, newPokemon);

      if (newConnections.length === 0) {
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
};

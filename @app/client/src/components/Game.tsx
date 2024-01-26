import { useState, useEffect, useCallback } from "react";
import type { Socket } from "socket.io-client";
import { TurnProps } from "./Turn";
import { timerMax } from "@poke2mon/data";
import type {
  ClientToServerEvents,
  ServerToClientEvents,
} from "@poke2mon/types";
import {
  pokemonCallbackValueValidator,
  gameStartInfoValidator,
  opponentTurnValidator,
  isWinnerValidator,
} from "@poke2mon/types";
import GameEnd from "./GameEnd";
import Disconnection from "./Disconnection";
import GameOngoing from "./GameOngoing";
import GameStarting from "./GameStarting";

export type Color = "primary" | "secondary" | "neutral";
export type GameState =
  | "ongoing"
  | "won"
  | "lost"
  | "disconnected"
  | "starting";

type Props = { socket: Socket<ServerToClientEvents, ClientToServerEvents> };

const Game: React.FC<Props> = ({ socket }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [startingPokemon, setStartingPokemon] = useState<string>("");
  const [turns, setTurns] = useState<TurnProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isMyTurn, setIsMyTurn] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(timerMax);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(
    null,
  );
  const [gameState, setGameState] = useState<GameState>("starting");

  const startTimer = useCallback(() => {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    setTimer(timerMax);

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1000);

    setTimerInterval(interval);
  }, [timerInterval]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("gameStart", (gameStartInfo) => {
      const parseResult = gameStartInfoValidator.safeParse(gameStartInfo);
      if (!parseResult.success) {
        // Server error
        return;
      }
      setGameState("ongoing");
      setStartingPokemon(gameStartInfo.startingPokemon);
      startTimer();
      if (gameStartInfo.isStartingPlayer) {
        setIsMyTurn(true);
      } else {
        setSearchText("Opponent's turn...");
      }
    });

    socket.on("opponentTurn", (value) => {
      const parseResult = opponentTurnValidator.safeParse(value);
      if (!parseResult.success) {
        // Server error
        return;
      }
      const newTurn: TurnProps = {
        pokemon: value.pokemon,
        color: "secondary",
        number: turns.length + 2,
        connections: value.connections,
      };
      setTurns((prev) => [newTurn, ...prev]);
      setIsMyTurn(true);
      setSearchText("");
      startTimer();
    });

    socket.on("opponentDisconnected", () => {
      setGameState((prev) => {
        if (prev === "ongoing" || prev === "starting") return "disconnected";
        return prev;
      });
    });

    socket.on("gameEnd", (isWinner) => {
      const parseResult = isWinnerValidator.safeParse(isWinner);
      if (!parseResult.success) {
        // Server error
        return;
      }
      setGameState((prev) => {
        if (prev === "disconnected") return prev;
        if (isWinner) return "won";
        return "lost";
      });
    });

    return () => {
      socket.off("connect");
      socket.off("gameStart");
      socket.off("opponentTurn");
      socket.off("opponentDisconnected");
      socket.off("gameEnd");
    };
  }, [turns.length, startTimer, socket]);

  const sendPokemon = (pokemonKey: string, pokemonName: string) => {
    if (!isMyTurn) return;

    socket.emit("pokemon", pokemonKey, (value) => {
      const parseResult = pokemonCallbackValueValidator.safeParse(value);
      if (!parseResult.success) {
        setError("Server Error - Try again");
        setIsMyTurn(true);
        setSearchText("");
      } else if (value.error) {
        setError(value.errorMessage);
        setIsMyTurn(true);
        setSearchText("");
      } else {
        setError(null);
        const newTurn: TurnProps = {
          pokemon: value.pokemon,
          color: "primary",
          number: turns.length + 2,
          connections: value.connections,
        };
        setTurns((prev) => [newTurn, ...prev]);
        setSearchText("Opponent's turn...");
        startTimer();
      }
    });

    setSearchText(pokemonName);
    setIsMyTurn(false);
    setError(null);
  };

  return (
    <>
      <GameStarting gameState={gameState} />
      <GameOngoing
        gameState={gameState}
        searchText={searchText}
        setSearchText={setSearchText}
        timer={timer}
        isMyTurn={isMyTurn}
        startingPokemon={startingPokemon}
        sendPokemon={sendPokemon}
        error={error}
        turns={turns}
      />
      <GameEnd gameState={gameState} />
      <Disconnection gameState={gameState} />
    </>
  );
};

export default Game;

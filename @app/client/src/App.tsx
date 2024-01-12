import { useState, useEffect, useRef, useCallback } from "react";
import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";
import Pokemon from "./components/Pokemon";
import Turn, { TurnProps } from "./components/Turn";
import pokemonNames from "@poke2mon/data/dist/pokemon";
import { timerMax } from "@poke2mon/data";
import type {
  ClientToServerEvents,
  ServerToClientEvents,
} from "@poke2mon/types";
import {
  pokemonCallbackValueValidator,
  isStartingPlayerValidator,
  opponentTurnValidator,
} from "@poke2mon/types";

const pokemonList = Object.keys(pokemonNames).map((key) => ({
  key,
  name: pokemonNames[key],
}));

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:3000",
);

export type Color = "primary" | "secondary" | "neutral";

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const [turns, setTurns] = useState<TurnProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inGame, setInGame] = useState<boolean>(false);
  const [opponentDisconnected, setOpponentDisconnected] =
    useState<boolean>(false);
  const [timer, setTimer] = useState<number>(timerMax);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(
    null,
  );

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

    socket.on("gameStart", (isStartingPlayer) => {
      const parseResult = isStartingPlayerValidator.safeParse(isStartingPlayer);
      if (!parseResult.success) {
        // Server error
        return;
      }
      setInGame(true);
      startTimer();
      if (!isStartingPlayer) {
        setIsLoading(true);
        setSearchText("Waiting for opponent...");
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
      setIsLoading(false);
      setSearchText("");
      startTimer();
    });

    socket.on("opponentDisconnected", () => {
      setOpponentDisconnected(true);
    });

    return () => {
      socket.off("connect");
      socket.off("gameStart");
      socket.off("opponentTurn");
      socket.off("opponentDisconnected");
    };
  }, [turns.length, startTimer]);

  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const sendPokemon = (pokemonKey: string, pokemonName: string) => {
    if (isLoading) return;

    socket.emit("pokemon", pokemonKey, (value) => {
      const parseResult = pokemonCallbackValueValidator.safeParse(value);
      if (!parseResult.success) {
        setError("Server Error - Try again");
        setIsLoading(false);
        setSearchText("");
      } else if (value.error) {
        setError(value.errorMessage);
        setIsLoading(false);
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
        setSearchText("Waiting for opponent...");
        startTimer();
      }
    });

    setSearchText(pokemonName);
    setIsLoading(true);
  };

  return (
    <div className="m-auto flex max-w-xl flex-col items-center justify-center gap-8 p-4">
      <div className="w-full text-center">
        <h1 className="text-2xl font-bold">
          POKÉ<span className="text-primary">2</span>MON
        </h1>
      </div>
      {opponentDisconnected ? (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-semibold">Opponent disconnected</span>
        </div>
      ) : inGame ? (
        <>
          <div className="flex items-center align-middle">
            <div className="mask mask-squircle flex h-14 w-14 items-center bg-primary">
              <div className="w-full text-center text-2xl font-bold text-primary-content">
                {timer}
              </div>
            </div>
          </div>
          <div className="relative flex w-full flex-row font-semibold">
            <input
              className="input input-bordered flex-1"
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              disabled={isLoading}
              ref={inputRef}
              placeholder="Search for Pokémon..."
            />
            {!isLoading &&
              searchText.length >= 3 &&
              pokemonList.some((pokemon) =>
                pokemon.name.toLowerCase().includes(searchText.toLowerCase()),
              ) && (
                <div className="absolute top-full z-20 w-full px-2">
                  <div className="w-full border-x border-t border-base-content bg-base-100">
                    {pokemonList
                      .filter((pokemon) =>
                        pokemon.name
                          .toLowerCase()
                          .includes(searchText.toLowerCase()),
                      )
                      .slice(0, 7)
                      .map((pokemon, index) => (
                        <button
                          key={index}
                          onClick={() => sendPokemon(pokemon.key, pokemon.name)}
                          className="w-full border-b border-base-content p-2 text-left hover:bg-primary hover:text-primary-content focus:bg-primary focus:text-primary-content"
                        >
                          {pokemon.name}
                        </button>
                      ))}
                  </div>
                </div>
              )}
            {isLoading && (
              <span className="loading loading-dots absolute right-4 top-1/3" />
            )}
          </div>
          {error !== null && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-semibold">{error}</span>
            </div>
          )}
          <div className="w-full px-4">
            {turns.map((turnProps, index) => (
              <Turn key={index} {...turnProps} />
            ))}
            <Pokemon name="Pikachu" color="neutral" number={1} />
            <span className="border-primary-content bg-primary text-primary-content" />
            <span className="border-secondary-content bg-secondary text-secondary-content" />
            <span className="border-neutral-content bg-neutral text-neutral-content" />
          </div>
        </>
      ) : (
        <div>
          <div className="text-xl">Waiting for opponent...</div>
          <div className="mt-4 flex flex-row justify-center align-middle">
            <span className="loading loading-infinity h-10 w-10" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

import { useState, useEffect, FormEvent, useRef } from "react";
import { io } from "socket.io-client";
import Pokemon from "./components/Pokemon";
import Turn, { TurnProps } from "./components/Turn";
import { ConnectionProps } from "./components/Connection";

const socket = io("http://localhost:3000");

export type Color = "primary" | "secondary" | "neutral";

function App() {
  const [pokemon, setPokemon] = useState<string>("");
  const [turns, setTurns] = useState<TurnProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
    return () => {
      socket.off("connect");
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const sendPokemon = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;

    socket.emit(
      "pokemon",
      pokemon,
      (
        value:
          | { pokemon: string; connections: ConnectionProps[]; error: false }
          | { error: true; errorMessage: string },
      ) => {
        if (value.error) {
          setError(value.errorMessage);
        } else {
          setError(null);
          const newTurn: TurnProps = {
            pokemon: value.pokemon,
            color: "primary",
            number: turns.length + 2,
            connections: value.connections,
          };
          setTurns((prev) => [newTurn, ...prev]);
        }
        setIsLoading(false);
      },
    );

    setPokemon("");
    setIsLoading(true);
  };

  return (
    <div className="m-auto flex max-w-xl flex-col items-center justify-center gap-8 p-4">
      <div className="w-full text-center">
        <h1 className="text-2xl font-bold">
          POKÉ<span className="text-primary">2</span>MON
        </h1>
      </div>
      <form
        onSubmit={sendPokemon}
        className="join flex w-full flex-row font-semibold"
      >
        <input
          className="input join-item input-bordered flex-1"
          type="text"
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
          disabled={isLoading}
          ref={inputRef}
        />
        <button
          className="btn btn-primary join-item text-primary-content"
          disabled={isLoading}
        >
          {!isLoading ? (
            <span>Submit</span>
          ) : (
            <span className="loading loading-dots" />
          )}
        </button>
      </form>
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
    </div>
  );
}

export default App;

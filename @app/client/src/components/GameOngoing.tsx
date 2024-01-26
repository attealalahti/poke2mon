import { useRef, useEffect } from "react";
import Turn from "./Turn";
import type { TurnProps } from "./Turn";
import type { GameState } from "./Game";
import Pokemon from "./Pokemon";
import pokemonNames from "@poke2mon/data/dist/pokemon";

type Props = {
  gameState: GameState;
  searchText: string;
  setSearchText: (value: React.SetStateAction<string>) => void;
  timer: number;
  isMyTurn: boolean;
  startingPokemon: string;
  sendPokemon: (pokemonKey: string, pokemonName: string) => void;
  error: string | null;
  turns: TurnProps[];
};

const pokemonList = Object.keys(pokemonNames).map((key) => ({
  key,
  name: pokemonNames[key],
}));

const GameOngoing: React.FC<Props> = ({
  gameState,
  searchText,
  setSearchText,
  timer,
  isMyTurn,
  startingPokemon,
  sendPokemon,
  error,
  turns,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isMyTurn) {
      inputRef.current?.focus();
    }
  }, [isMyTurn]);

  if (gameState !== "ongoing") return null;

  return (
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
          disabled={!isMyTurn}
          ref={inputRef}
          placeholder="Search for Pokémon..."
        />
        {isMyTurn &&
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
        {!isMyTurn && (
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
        <Pokemon name={startingPokemon} color="neutral" number={1} />
        <span className="border-primary-content bg-primary text-primary-content" />
        <span className="border-secondary-content bg-secondary text-secondary-content" />
        <span className="border-neutral-content bg-neutral text-neutral-content" />
      </div>
    </>
  );
};

export default GameOngoing;

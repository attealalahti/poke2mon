import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";
import type {
  ClientToServerEvents,
  ServerToClientEvents,
} from "@poke2mon/types";
import Game from "./components/Game";
import { useState } from "react";
import ThemeSwapButton from "./components/ThemeSwapButton";
import Pokemon from "./components/Pokemon";
import Turn from "./components/Turn";

console.log(import.meta.env);
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  import.meta.env.VITE_SOCKET_IO_URL || "http://localhost:3000",
);

function App() {
  const [isInGame, setIsInGame] = useState<boolean>(false);

  const startGame = () => {
    socket.emit("play");
    setIsInGame(true);
  };

  const goBack = () => {
    setIsInGame(false);
  };

  return (
    <div className="m-auto flex max-w-xl flex-col items-center justify-center gap-8 p-4">
      <div className="w-full">
        <div className="flex w-full justify-end">
          <ThemeSwapButton />
        </div>
        <h1 className="text-center text-2xl font-bold">
          POKÉ<span className="text-primary">2</span>MON
        </h1>
      </div>
      {isInGame && <Game socket={socket} goBack={goBack} />}
      {!isInGame && (
        <>
          <button onClick={startGame} className="btn btn-primary btn-lg">
            Play against a random opponent
          </button>
          <div className="divider" />
          <div className="mb-10 flex w-full flex-col gap-6">
            <h2 className="text-center text-2xl font-bold">How to play</h2>
            <p>
              You and your opponent take turns naming Pokémon that have a
              connection to the previously named Pokémon. The possible
              connections are the Pokémon's{" "}
              <span className="font-bold">full typing</span>, its{" "}
              <span className="font-bold">abilities</span> and{" "}
              <span className="font-bold">level-up learnset</span>. If you can't
              think of a Pokémon with a connection to the previous Pokémon in 20
              seconds, you lose.
            </p>
            <p>
              For example, if <span className="font-bold">Gastly</span> was
              played previously, a possible next play could be{" "}
              <span className="font-bold">Haunter</span>:
            </p>
            <div className="p-4">
              <Turn
                pokemon="Haunter"
                number={2}
                connections={[
                  { name: "Type: Ghost / Poison", count: 1 },
                  { name: "Ability: Levitate", count: 1 },
                  { name: "Move: Lick", count: 1 },
                ]}
                color="primary"
              />
              <Pokemon name="Gastly" number={1} color="neutral" />
            </div>
            <p>
              Both of the Pokémon's types (or the single monotype) must match
              for a type connection to be made. For example, playing{" "}
              <span className="font-bold">Rotom</span> after{" "}
              <span className="font-bold">Haunter</span> is possible because
              both of them share the ability{" "}
              <span className="font-bold">Levitate</span>, but their shared
              partial <span className="font-bold">Ghost</span> typing is not
              enough for a connection:
            </p>
            <div className="p-4">
              <Turn
                pokemon="Rotom"
                number={3}
                connections={[{ name: "Ability: Levitate", count: 2 }]}
                color="secondary"
              />
              <Pokemon name="Haunter" number={2} color="primary" />
            </div>
            <p>
              Remember that only moves learned through level-up can be valid
              connections. For example,{" "}
              <span className="font-bold">Azumarill</span> cannot be played
              after <span className="font-bold">Rotom Wash</span> because{" "}
              <span className="font-bold">Rotom Wash</span> can only learn{" "}
              <span className="font-bold">Hydro Pump</span> through form change.
            </p>
            <p>
              After a specific connection has been used 3 times (indicated by 3
              Xs), that connection cannot be used again. Pokémon with that
              typing, ability or move can still be played, but only if the
              previously played Pokémon does not share that particular
              connection.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

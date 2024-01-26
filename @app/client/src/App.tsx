import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";
import type {
  ClientToServerEvents,
  ServerToClientEvents,
} from "@poke2mon/types";
import Game from "./components/Game";
import { useState } from "react";
import ThemeSwapButton from "./components/ThemeSwapButton";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:3000",
);

function App() {
  const [isInGame, setIsInGame] = useState<boolean>(false);

  const startGame = () => {
    socket.emit("play");
    setIsInGame(true);
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
      {isInGame && <Game socket={socket} />}
      {!isInGame && (
        <>
          <button onClick={startGame} className="btn btn-primary btn-lg">
            Play against a random opponent
          </button>
          <div>
            <h2 className="text-center text-2xl">How to play</h2>
            <p></p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

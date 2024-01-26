import type { GameState } from "../App";

type Props = { gameState: GameState };

const GameStarting: React.FC<Props> = ({ gameState }) => {
  if (gameState !== "starting") return null;

  return (
    <div>
      <div className="text-xl">Searching for opponent...</div>
      <div className="mt-4 flex flex-row justify-center align-middle">
        <span className="loading loading-infinity h-10 w-10" />
      </div>
    </div>
  );
};

export default GameStarting;

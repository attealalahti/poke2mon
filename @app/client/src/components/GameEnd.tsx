import type { GameState } from "../App";

type Props = { gameState: GameState };

const GameEnd: React.FC<Props> = ({ gameState }) => {
  if (gameState === "ongoing") return null;

  const message = gameState === "won" ? "You won!" : "You lost.";

  return <div className="text-3xl font-semibold">{message}</div>;
};

export default GameEnd;

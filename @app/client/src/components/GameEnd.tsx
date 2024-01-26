import type { GameState } from "./Game";

type Props = { gameState: GameState };

const GameEnd: React.FC<Props> = ({ gameState }) => {
  if (gameState !== "won" && gameState !== "lost") return null;

  const message = gameState === "won" ? "You won!" : "You lost.";

  return <div className="text-center text-3xl font-semibold">{message}</div>;
};

export default GameEnd;

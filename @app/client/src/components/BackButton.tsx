import type { GameState } from "./Game";

type Props = { gameState: GameState; goBack: () => void };

const BackButton: React.FC<Props> = ({ gameState, goBack }) => {
  if (
    gameState !== "disconnected" &&
    gameState !== "lost" &&
    gameState !== "won"
  )
    return null;

  return (
    <button className="btn btn-primary btn-lg" onClick={goBack}>
      Back
    </button>
  );
};

export default BackButton;

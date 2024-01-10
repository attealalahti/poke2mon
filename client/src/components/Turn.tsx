import { Color } from "../App";
import type { ConnectionProps } from "./Connection";
import ConnectionGroup from "./ConnectionGroup";
import Pokemon from "./Pokemon";

export type TurnProps = {
  pokemon: string;
  color: Color;
  connections: ConnectionProps[];
  number: number;
};

const Turn: React.FC<TurnProps> = ({ pokemon, color, connections, number }) => {
  return (
    <>
      <Pokemon name={pokemon} color={color} number={number} />
      <ConnectionGroup connections={connections} color={color} />
    </>
  );
};

export default Turn;

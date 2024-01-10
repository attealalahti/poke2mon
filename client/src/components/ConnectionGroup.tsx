import type { ConnectionProps } from "./Connection";
import type { Color } from "../App";
import Connection from "./Connection";

type Props = {
  connections: ConnectionProps[];
  color: Color;
};

const ConnectionGroup: React.FC<Props> = ({ connections, color }) => {
  return (
    <div className="relative flex flex-col justify-center gap-2 py-8 align-middle">
      {connections.map((props, index) => (
        <Connection key={index} {...props} />
      ))}
      <div
        className={`absolute left-1/2 right-1/2 m-auto h-full w-2 bg-${color}`}
      />
    </div>
  );
};

export default ConnectionGroup;

type Props = {
  name: string;
  color: "primary" | "secondary" | "neutral";
  number: number;
};

const Pokemon: React.FC<Props> = ({ name, color, number }) => {
  return (
    <div
      className={`indicator bg-${color} text-${color}-content border-${color}-content w-full rounded-[--rounded-box] border-2 p-4 text-lg font-semibold`}
    >
      <span className="indicator-item badge badge-primary indicator-start text-primary-content">
        {number}
      </span>
      <div className="w-full text-center">{name}</div>
    </div>
  );
};

export default Pokemon;

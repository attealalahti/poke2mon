export type ConnectionProps = {
  name: string;
  count: number;
};

const Connection: React.FC<ConnectionProps> = ({ name, count }) => {
  return (
    <div className="bg-neutral text-neutral-content z-10 mx-6 flex flex-row rounded-[--rounded-box] px-4 py-2">
      <span className="flex-1">{name}</span>
      <div className="flex flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${count >= 1 ? "text-accent" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${count >= 2 ? "text-accent" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${count >= 3 ? "text-accent" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};

export default Connection;

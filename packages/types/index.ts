import z from "zod";

const connectionValidator = z.object({
  name: z.string(),
  count: z.number(),
});
export type Connection = z.infer<typeof connectionValidator>;

export const pokemonParameterValidator = z.string();
type PokemonParameter = z.infer<typeof pokemonParameterValidator>;

export const pokemonCallbackValueValidator = z
  .object({
    error: z.literal(false),
    pokemon: z.string(),
    connections: connectionValidator.array(),
  })
  .or(
    z.object({
      error: z.literal(true),
      errorMessage: z.string(),
    })
  );
type PokemonCallbackValue = z.infer<typeof pokemonCallbackValueValidator>;

export const gameStartInfoValidator = z.object({
  isStartingPlayer: z.boolean(),
  startingPokemon: z.string(),
});
type GameStartInfo = z.infer<typeof gameStartInfoValidator>;

export const opponentTurnValidator = z.object({
  pokemon: z.string(),
  connections: connectionValidator.array(),
});
type OpponentTurn = z.infer<typeof opponentTurnValidator>;

export const isWinnerValidator = z.boolean();
type IsWinner = z.infer<typeof isWinnerValidator>;

export type ServerToClientEvents = {
  gameStart: (isStartingPlayer: GameStartInfo) => void;
  opponentTurn: (value: OpponentTurn) => void;
  opponentDisconnected: () => void;
  gameEnd: (isWinner: IsWinner) => void;
};

export type ClientToServerEvents = {
  pokemon: (
    name: PokemonParameter,
    callback: (value: PokemonCallbackValue) => void
  ) => void;
};

export type InterServerEvents = {};

export type SocketData = {
  gameId: string;
};

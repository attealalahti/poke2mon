import z from "zod";

const connectionValidator = z.object({
  name: z.string(),
  count: z.number(),
});
export type Connection = z.infer<typeof connectionValidator>;

export type ServerToClientEvents = {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
};

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

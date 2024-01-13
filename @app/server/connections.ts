import type { Pokemon } from "pokenode-ts";
import { prettify } from "./text";
import type { Connection } from "@poke2mon/types";

export const findConnections = (previous: Pokemon, current: Pokemon) => {
  const connections: string[] = [];

  // Type
  const previousTypes = previous.types.map((pokeType) => pokeType.type.name);
  const currentTypes = current.types.map((pokeType) => pokeType.type.name);

  if (
    previousTypes.every((type) => currentTypes.includes(type)) &&
    currentTypes.every((type) => previousTypes.includes(type))
  ) {
    const types = previousTypes.sort().map((type) => prettify(type));
    const fullType = types.join(" / ");
    connections.push(`Type: ${prettify(fullType)}`);
  }

  // Abilities
  const previousAbilities = previous.abilities.map(
    (pokeAbility) => pokeAbility.ability.name
  );
  const currentAbilities = current.abilities.map(
    (pokeAbility) => pokeAbility.ability.name
  );

  for (const ability of previousAbilities) {
    if (currentAbilities.includes(ability)) {
      connections.push(`Ability: ${prettify(ability)}`);
    }
  }

  // Moves
  const previousMoves = previous.moves
    .filter(
      (pokeMove) =>
        pokeMove.version_group_details[
          pokeMove.version_group_details.length - 1
        ]?.move_learn_method.name === "level-up"
    )
    .map((pokeMove) => pokeMove.move.name);
  const currentMoves = current.moves
    .filter(
      (pokeMove) =>
        pokeMove.version_group_details[
          pokeMove.version_group_details.length - 1
        ]?.move_learn_method.name === "level-up"
    )
    .map((pokeMove) => pokeMove.move.name);

  for (const move of previousMoves) {
    if (currentMoves.includes(move)) {
      connections.push(`Move: ${prettify(move)}`);
    }
  }

  return connections;
};

// Sort connections by type of connection and connection count
export const sortConnections = (connections: Connection[]): void => {
  connections.sort(
    (a, b) => getOrderByFirstLetter(a.name) - getOrderByFirstLetter(b.name)
  );
  connections.sort((a, b) => b.count - a.count);
};

// Helper function for sorting Type -> Ability -> Move
const getOrderByFirstLetter = (word: string) => {
  if (word.charAt(0) === "T") {
    return 1;
  } else if (word.charAt(0) === "A") {
    return 2;
  } else {
    return 3;
  }
};

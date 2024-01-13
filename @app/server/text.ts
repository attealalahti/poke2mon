import pokemonNames from "@poke2mon/data/dist/pokemon";

// Removes dashes between each word and capitalizes each word
export const prettify = (text: string) => {
  const split = text.split("-");
  const capitalized = split.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const rest = word.slice(1);
    return firstLetter + rest;
  });
  const joined = capitalized.join(" ");
  return joined;
};

// Same as prettify but includes exceptions for specific Pokemon
export const prettifyPokemonName = (name: string): string => {
  const prettyName = pokemonNames[name];
  if (prettyName) {
    return prettyName;
  } else {
    return name;
  }
};

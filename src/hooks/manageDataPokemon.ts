import { getPokemonDetailsByUrl } from "../api/pokemon";
import { PokemonData, PokemonResponse, Results } from "../types/pokemonTypes";

export const filterDataPokemon = async (
    pokemonsPromises: PromiseSettledResult<PokemonData>[]
  ) => {
    const filterResponses = await pokemonsPromises.filter(
      (result): result is PromiseFulfilledResult<PokemonData> =>
        result.status === "fulfilled"
    );

    return await filterResponses.map((result) => {
      const pokemonResult: PokemonData = result?.value;
      return {
        id: pokemonResult.id,
        name: pokemonResult.name,
        type: pokemonResult.types[0].type.name,
        order: pokemonResult.order,
        image: pokemonResult.sprites?.other["official-artwork"]?.front_default,
        types: pokemonResult.types,
        height: pokemonResult.height,
        weight: pokemonResult.weight,
        moves: pokemonResult.moves,
        stats: pokemonResult.stats
      };
    });
  };

export const getDetailsPokemon = async (
    dataPokemon: PokemonResponse
  ): Promise<PokemonData[]> => {
    if (dataPokemon && dataPokemon.results) {
      const pokemonsUrl = await getPokemonsUrl(dataPokemon.results);
      const promises = await pokemonsUrl.map((url) =>
        getPokemonDetailsByUrl(url)
      );
      const pokemonsPromises: PromiseSettledResult<PokemonData>[] =
        await Promise.allSettled(promises);
      return await filterDataPokemon(pokemonsPromises);
    }
    return [];
};

const getPokemonsUrl = (pokemonResults: Results[]): string[] => {
    return pokemonResults.map((item) => item?.url);
};
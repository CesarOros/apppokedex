import { Text } from "react-native";
import React, { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import { DEFAULT_POKEMON_URL } from "../utils/constans";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemons } from "../api/pokemon";
import { PokemonData } from "../types/pokemonTypes";
import { getDetailsPokemon } from "../hooks/manageDataPokemon";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [nextUrl, setNextUrl] = useState<string>(DEFAULT_POKEMON_URL);

  useEffect(() => {
    (async () => await loadPokemons())();
  }, []);

  const loadPokemons = async () => {
    try {
      const dataPokemon = await getPokemons(nextUrl);
      setNextUrl(dataPokemon.next);
      const pokemonDetails = await getDetailsPokemon(dataPokemon);
      setPokemons([...pokemons, ...pokemonDetails]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}

import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";
import { PokemonData } from "../types/pokemonTypes";
import PokemonCard from "./PokemonCard";

interface props {
  pokemons: PokemonData[];
  loadPokemons: () => Promise<void>;
  isNext: any;
}

export default function PokemonList(props: props) {
  const { pokemons, loadPokemons, isNext } = props;
  const loadMore = () => loadPokemons();

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
      style={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 5 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { PokemonData } from "../types/pokemonTypes";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import { StackNavigationProp } from "@react-navigation/stack";

interface props {
  pokemon: PokemonData;
}
type PokemonNavigationProp = {
  pokemon: PokemonData;
};

export default function PokemonCard(props: props) {
  const { pokemon } = props;
  const navigation =
    useNavigation<StackNavigationProp<PokemonNavigationProp>>();

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { ...pokemon });
  };

  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, "0")}
            </Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image
              source={require("../assets/pokebola-blanca.png")}
              style={styles.pokebola}
            />
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 20,
    padding: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 0,
    textTransform: "capitalize",
  },
  number: {
    position: "absolute",
    top: 30,
    left: 10,
    color: "#fff",
    fontSize: 12,
  },
  pokebola: {
    width: 110,
    height: 110,
    position: "absolute",
    opacity: 0.2,
    right: -20,
    bottom: -10,
    zIndex: -100,
  },
});

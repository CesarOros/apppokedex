import { View, Dimensions, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PokemonImage } from "./PokemonImage";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import { PokemonDetails } from "./PokemonDetails";
import PokemonStats from "./PokemonStats";
import { PokemonData } from "../types/pokemonTypes";

interface props {
  route: {
    params: PokemonData;
  };
  navigation: any;
}

export default function Pokemon(props: props) {
  const {
    route: { params },
    navigation,
  } = props;

  const windowWidth = Dimensions.get("window").width;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: getColorByPokemonType(params.type),
      }}
    >
      <View style={styles.bar}>
        <TouchableOpacity style={styles.touchable}>
          <Icon
            name="arrow-back"
            color="#fff"
            size={35}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Icon
            name="heart"
            color="#fff"
            size={35}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      </View>
      <PokemonImage pokemon={{ image: params.image, name: params.name }} />

      <ScrollView style={[styles.details, { width: windowWidth }]}>
        <PokemonDetails pokemon={params} />
        <PokemonStats pokemonStats={params.stats} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { flexDirection: "row", justifyContent: "space-between" },
  touchable: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  details: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 2,
    zIndex: -1000,
  },
});

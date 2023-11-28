import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import { PokemonData } from "../types/pokemonTypes";

interface props {
  pokemon: PokemonData;
}

export const PokemonDetails = (props: props) => {
  const { pokemon } = props;
  const DEFAULT_COLOR = getColorByPokemonType(pokemon.type);

  return (
    <View
      style={{
        paddingTop: 30,
        paddingHorizontal: 20,
        flexDirection: "row",
      }}
    >
      <View style={styles.container} key="about">
        <Text
          style={{
            ...styles.subtitle,
            color: DEFAULT_COLOR,
          }}
        >
          About
        </Text>
        <View style={styles.subcontainer}>
          <Icon
            name="ios-barbell-outline"
            size={30}
            style={{ marginRight: 20 }}
          />
          <Text>{pokemon.weight / 10} kg</Text>
        </View>
        <View style={styles.subcontainer}>
          <Icon name="paw-outline" size={30} style={{ marginRight: 20 }} />
          <Text>{pokemon.height / 10} m</Text>
        </View>
      </View>

      <View style={styles.container} key="types">
        <Text style={{ ...styles.subtitle, color: DEFAULT_COLOR }}>Types</Text>
        {pokemon.types.map((item) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
            key={item.type.name + pokemon.name}
          >
            <View>
              <Text
                style={{
                  color: "#fff",
                  backgroundColor: getColorByPokemonType(item.type.name),
                  borderRadius: 50,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  marginBottom: 20,
                  textTransform: "capitalize",
                }}
              >
                {item.type.name}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  subtitle: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  subcontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center",
  },
});

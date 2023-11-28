import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Stats } from "../types/pokemonTypes";
import { barStyles } from "../utils/pokemonUtils";

interface Props {
  pokemonStats: Stats[];
}

export default function PokemonStats(props: Props) {
  const { pokemonStats } = props;
  return (
    <View style={styles.content}>
      <Text style={styles.title}>PokemonStats</Text>
      {pokemonStats.map((stat, index) => (
        <View key={"stat" + index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{stat.stat.name}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{stat.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(stat.base_stat)]}></View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    textTransform: "capitalize",
    fontSize: 12,
    color: "#6B6B6B",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
    fontWeight: "bold",
  },
  bgBar: {
    backgroundColor: "#DEDEDE",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});

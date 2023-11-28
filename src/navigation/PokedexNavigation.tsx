import React from "react";
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokedexNAv"
        component={Pokedex}
        options={{
          title: "",
          headerTitleAlign: "center",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: "",
          headerTitleAlign: "center",
          headerTransparent: true,
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
}

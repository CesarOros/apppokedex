import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../screens/Favorites";

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorites}
        options={{
          title: "Favoritos",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}

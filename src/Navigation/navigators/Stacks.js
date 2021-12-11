import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerMenu from "./DrawerMenu";

import { Home, Accounts, Profile, Settings, Stats, Help, Transactions } from "Screens";

const Stack = createStackNavigator();

const Stacks = ({ params }) => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={DrawerMenu}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Accounts"
      component={Accounts}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Stats"
      component={Stats}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Help"
      component={Help}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Transactions"
      component={Transactions}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default Stacks;

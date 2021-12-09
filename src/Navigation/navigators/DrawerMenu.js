import React from "react";
import { View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { McText, McImage } from "Components";
import { Images } from "Constants";
import { useTheme } from "styled-components/native";
import { Home } from 'Screens'

let Drawer = createDrawerNavigator()

const DrawerMenu = () => {
  let theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.boxBackground }}>
      <Drawer.Navigator
        hideStatusBar={true}
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: '60%',
          backgroundColor: 'transparent'
        }}
        sceneContainerStyle={{
          backgroundColor: 'transparent'
        }}
        initialRouteName="Home"
      >
        <Drawer.Screen name='Home' >
          {(props) => <Home {...props} /> }
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerMenu;

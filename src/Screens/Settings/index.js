import React from "react";
import { View, Text, Switch } from "react-native";
import Animated from "react-native-reanimated";
import  { useTheme } from "styled-components/native";
import { useThemeContext } from "Themes";
import { McText } from "Components";

const Settings = ({ animatedStyle }) => {
  let theme = useTheme();
  let themeContext = useThemeContext();

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
        ...animatedStyle,
      }}
    >
      <McText bold size={24} color={theme.colors.text1}>
        Settings Screen
      </McText>
      <View
        style={{
          marginTop: 55,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <McText size={16} color={theme.colors.text1} style={{marginRight: 10}} >Light</McText>
        <Switch
          value={themeContext.mode === "dark"}
          onValueChange={(value) => {
            themeContext.setMode(value ? "dark" : "light");
          }}
        ></Switch>
        <McText size={16} color={theme.colors.text1} style={{marginLeft: 10}} >Dark</McText>
      </View>
    </Animated.View>
  );
};

export default Settings;

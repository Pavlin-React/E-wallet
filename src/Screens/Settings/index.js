import React from "react";
import { View, Text, Switch } from "react-native";
import Animated from "react-native-reanimated";
import { useTheme } from "styled-components/native";
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
      <View>
        <Switch
          value={themeContext.mode === "dark"}
          onValueChange={(value) => {
              themeContext.setMode(value ? 'dark' : 'light')
          }}
        ></Switch>
      </View>
    </Animated.View>
  );
};

export default Settings;

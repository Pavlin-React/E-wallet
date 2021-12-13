import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { McText, McImage } from "Components";
import { Images } from "Constants";

const SignIn = ({ navigation }) => {
  let theme = useTheme();

  return (
    <View>
      <StatusBar hidden={true} />
      <View style={{ flexDirection: "row" }}>
        <McImage source={Images.color_bar} />
        <View
          style={{
            marginTop: 44,
            marginBottom: 53,
            marginHorizontal: 26,
            justifyContent: "space-between",
          }}
        >
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <McText semi size={24} color={theme.colors.text1}>
                06:20 PM
              </McText>
              <McImage source={Images.cloud} style={{ marginLeft: 20 }} />
              <McText
                semi
                size={13}
                style={{ marginLeft: 8 }}
                color={theme.colors.text1}
              >
                34 C
              </McText>
            </View>
            <McText
              medium
              size={13}
              style={{ marginTop: 8 }}
              color={theme.colors.text3}
            >
              Nov.10.2020 | Wednesday
            </McText>
          </View>
          <View>
            <McImage source={Images.logo} />
            <McText
              secondary
              size={28}
              color={theme.colors.text1}
              style={{ marginTop: 16 }}
            >
              eWallet
            </McText>
            <View
              style={{ alignContent: "space-between", height: 110, width: 189 }}
            >
              <McText
                medium
                size={14}
                color={theme.colors.text3}
                style={{ lineHeight: 22, marginTop: 16 }}
              >
                Open an account for a digital online solutions. Instance
                payouts.
              </McText>
              <McText
                medium
                size={14}
                color={theme.colors.text3}
                style={{ marginTop: 16 }}
              >
                Join for free
              </McText>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {navigation.navigate('Home')}}
              style={{
                height: 50,
                width: 190,
                backgroundColor: theme.colors.primary,
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <McText semi size={16} >Sign In</McText>
              <McImage source={Images.right_arrow} style={{marginLeft: 8}}/>
            </TouchableOpacity>
            <View style={{alignItems: 'center', marginTop: 30}} >
              <McText size={16} color={theme.colors.text1} >Create an Account</McText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

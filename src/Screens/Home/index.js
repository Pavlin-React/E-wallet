import React from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import Animated from "react-native-reanimated";
import { useTheme } from "styled-components/native";
import styled from "styled-components";
import { McText, McImage } from "Components";
import { Images } from "Constants";
import { dummyData } from "Mock";

const Home = ({ animatedStyle }) => {
  let theme = useTheme();

  return (
    <Animated.View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: theme.colors.background,
        marginTop: 44,
        ...animatedStyle,
      }}
    >
      <HeaderSection>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <McImage source={Images.logo} style={{ marginRight: 10 }} />
          <McText secondary size={28} color={theme.colors.text1}>
            eWallet
          </McText>
        </View>
        <McImage
          source={Images.union}
          style={{ width: 19, height: 19, tintColor: theme.colors.text2 }}
        />
      </HeaderSection>
      <HeaderSection style={{ marginTop: 50 }}>
        <McText semi size={16} color={theme.colors.text1}>
          Account Overview
        </McText>
      </HeaderSection>
      <View
        style={{
          marginHorizontal: 25,
          marginTop: 20,
          height: 116,
          flexDirection: "row",
          backgroundColor: theme.colors.boxBackground,
          borderRadius: 12,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ marginLeft: 25 }}>
          <McText
            semi
            size={24}
            color={theme.colors.text1}
            style={{ lineHeight: 30, marginBottom: 8 }}
          >
            20,600
          </McText>
          <McText semi size={16} color={theme.colors.text3}>
            Current balance
          </McText>
        </View>
        <TouchableOpacity
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: theme.colors.primary,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 25,
          }}
        >
          <McImage source={Images.plus} />
        </TouchableOpacity>
      </View>
      {/* Send Money */}
      <HeaderSection style={{ marginTop: 40 }}>
        <McText semi size={16} color={theme.colors.text2}>
          Sending Money
        </McText>
        <McImage
          source={Images.scan}
          style={{ width: 24, height: 24, tintColor: theme.colors.text2 }}
        />
      </HeaderSection>
      <View>
        <FlatList
          data={dummyData.SendMoneyRecords}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  marginTop: 20,
                  marginLeft: index === 0 ? 25 : 0,
                  marginRight:
                    index === dummyData.SendMoneyRecords.length - 1 ? 0 : 10,
                }}
              >
                {index === 0 ? (
                  <TouchableOpacity
                    style={{
                      width: 52,
                      height: 120,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 52,
                        height: 52,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 26,
                        backgroundColor: theme.colors.primary,
                      }}
                    >
                      <McImage source={item.img} />
                    </View>
                  </TouchableOpacity>
                ) : (
                  <View
                    style={{
                      width: 110,
                      height: 120,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: theme.colors.boxBackground,
                      borderRadius: 12,
                    }}
                  >
                    <View
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 21,
                        borderWidth: 1,
                        borderColor: "rgba(58, 66, 118, 0.2)",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: theme.colors.boxBackground,
                      }}
                    >
                      <McImage source={item.avatar} />
                    </View>
                    <McText
                      size={16}
                      color={theme.colors.text3}
                      style={{ marginTop: 16 }}
                    >
                      {item.name}
                    </McText>
                  </View>
                )}
              </View>
            );
          }}
        ></FlatList>
      </View>
      {/* Services */}
      <HeaderSection style={{ marginTop: 40 }}>
        <McText semi size={16} color={theme.colors.text2}>
          Services
        </McText>
        <McImage
          source={Images.filter}
          style={{ width: 24, height: 25, tintColor: theme.colors.text2 }}
        />
      </HeaderSection>
      <View>
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 25,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {dummyData.Services?.map((item, index) => {
            return (
              <View
                key={item.id}
                style={{
                  height: 96,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: index === 0 || index === 4 ? 0 : 28,
                  marginTop: index > 3 ? 20 : 0,
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 12,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: theme.colors.boxBackground,
                  }}
                >
                  <McImage source={item.img} />
                </TouchableOpacity>
                  <McText
                    semi
                    size={10}
                    color={theme.colors.text3}
                    style={{ marginTop: 6, width: 52, textAlign: 'center'}}
                  >
                    {item.name}
                  </McText>
              </View>
            );
          })}
        </View>
      </View>
    </Animated.View>
  );
};

let HeaderSection = styled.View`
  margin: 0px 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default Home;

import React from 'react';
import { View, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

const Transactions = ({animatedStyle}) => {

    let theme = useTheme()

    return (
        <Animated.View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.colors.background,
                ...animatedStyle,
            }}
        >
            <Text>Transaction Screen</Text>
        </Animated.View>
    );
};

export default Transactions;

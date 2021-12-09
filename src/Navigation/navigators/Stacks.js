import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerMenu from './DrawerMenu'

import { Home } from 'Screens';

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
    </Stack.Navigator>
);

export default Stacks;

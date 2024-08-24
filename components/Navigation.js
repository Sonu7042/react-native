import React from 'react';
import { View, Text } from 'react-native';
import {enableScreens} from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

enableScreens()



const Navigations = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};



const Home = () => {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    );
};


export default Navigations;

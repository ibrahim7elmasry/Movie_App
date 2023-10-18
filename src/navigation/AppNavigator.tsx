import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetailsScreen from '../presentation/screens/MovieDetailsScreen/MovieDetailsScreen';
import HomeScreen from '../presentation/screens/home/home';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeScreen} />
            <Stack.Screen name="MovieDetails" options={{ headerShown: false }} component={MovieDetailsScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;

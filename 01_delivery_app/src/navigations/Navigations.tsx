import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Restaurant from "../screens/Restaurant";

type Props = {};

const Navigations = function ({}: Props) {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Restaurant">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Restaurant" component={Restaurant} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigations;

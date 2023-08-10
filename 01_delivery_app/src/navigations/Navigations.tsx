import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { publicRoutes } from "../routes";
type Props = {};

const Navigations = function ({}: Props) {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {publicRoutes.map(function (publicRoute: any, index: number) {
                    <Stack.Screen
                        name={publicRoute.path}
                        component={publicRoute.conponent}
                    />;
                })}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigations;

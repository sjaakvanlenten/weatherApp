import { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { Home, Details } from "@screens";

export type StackNavigatorParams = {
    Home: undefined;
    Details: { cityName: string };
};

const Stack = createStackNavigator<StackNavigatorParams>();

export default function Navigator(): ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{
                        gestureEnabled: true,
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

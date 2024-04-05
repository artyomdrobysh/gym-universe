import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@screens/Home";
import MuscleGroups from "@screens/MuscleGroups";
import Exercises from "@screens/Exercises";
import { SafeExerciseDetails } from "@screens/ExerciseDetails";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: "Добро пожаловать" }}
                />
                <Stack.Screen
                    name="MuscleGroups"
                    component={MuscleGroups}
                    options={({ route: { params } }) => ({
                        title: `Группы мышц${
                            params?.name
                                ? ": " + params?.name.toLowerCase()
                                : ""
                        }`,
                    })}
                />
                <Stack.Screen
                    name="Exercises"
                    component={Exercises}
                    options={{ title: "Упражнения" }}
                />
                <Stack.Screen
                    name="ExerciseDetails"
                    component={SafeExerciseDetails}
                    options={{ title: "Справочник" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

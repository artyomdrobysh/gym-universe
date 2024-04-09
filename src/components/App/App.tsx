import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import Home from "@screens/Home";
import AddTraining from "@screens/AddTraining";
import MuscleGroups from "@screens/MuscleGroups";
import Exercises from "@screens/Exercises";
import DoExercise from "@screens/DoExercise";
import TrainingsHistory from "@screens/TrainingsHistory";

import withErrorBoundaryScreen from "@hoc/withErrorBoundaryScreen";
const AddTrainingScreen = withErrorBoundaryScreen(AddTraining);
const MuscleGroupsScreen = withErrorBoundaryScreen(MuscleGroups);
const ExercisesScreen = withErrorBoundaryScreen(Exercises);
const DoExerciseScreen = withErrorBoundaryScreen(DoExercise);
const TrainingsHistoryScreen = withErrorBoundaryScreen(TrainingsHistory);

import store from "@store/store";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ title: "Добро пожаловать" }}
                    />
                    <Stack.Screen
                        name="AddTraining"
                        component={AddTrainingScreen}
                        options={{ title: "Добавить тренировку" }}
                    />
                    <Stack.Screen
                        name="MuscleGroups"
                        component={MuscleGroupsScreen}
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
                        component={ExercisesScreen}
                        options={{ title: "Упражнения" }}
                    />
                    <Stack.Screen
                        name="DoExercise"
                        component={DoExerciseScreen}
                        options={{ title: "Выполнение упражнения" }}
                    />
                    <Stack.Screen
                        name="TrainingsHistory"
                        component={TrainingsHistoryScreen}
                        options={{ title: "История тренировок" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

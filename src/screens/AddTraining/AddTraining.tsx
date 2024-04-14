import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, ScrollView, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Loader from "@components/Loader";

import ROUTES from "@constants/routes";

import { useAppDispatch, useAppSelector } from "@hooks/redux";

import { selectExercises, clear, remove } from "@store/slices/training";

import Training, { TrainingExercise } from "@domain/Training";

import { save } from "@mock/trainings";

import AddButton from "./AddButton";
import ReadyExercise from "./ReadyExercise";
import styles from "./styles";

export default function AddTraining({
    navigation,
}: NativeStackScreenProps<ROUTES, "AddTraining">) {
    const [saveLoading, setSaveLoading] = useState<boolean>(false);

    const start = useRef<Date>(new Date());

    const exercises: TrainingExercise[] = useAppSelector(selectExercises);

    const dispatch = useAppDispatch();

    const addButtonOnPress = useCallback(
        () => navigation.navigate("MuscleGroups"),
        [navigation],
    );
    const removeExercise = useCallback(
        (exerciseId: number) => {
            dispatch(remove(exerciseId));
        },
        [dispatch],
    );

    useEffect(() => {
        return () => {
            dispatch(clear());
        };
    }, [dispatch]);

    if (saveLoading) {
        return <Loader />;
    }

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator
                persistentScrollbar>
                {exercises.map(({ exerciseId, exerciseImage }) => (
                    <ReadyExercise
                        key={exerciseId}
                        image={exerciseImage}
                        exerciseId={exerciseId}
                        onRemove={removeExercise}
                    />
                ))}
                <AddButton onPress={addButtonOnPress} />
            </ScrollView>
            <Button
                title="Завершить тренировку"
                disabled={exercises.length === 0}
                onPress={finishTraining}
            />
        </View>
    );

    function finishTraining() {
        const trainingToCreate: Omit<Training, "id"> = {
            start: start.current.toISOString(),
            finish: new Date().toISOString(),
            exercises,
        };
        setSaveLoading(true);
        save(trainingToCreate).then(() => {
            navigation.navigate("Home");
        });
        // todo think about mounted and handling errors
    }
}

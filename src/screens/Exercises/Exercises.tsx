import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import ImageButton from "@components/ImageButton";

import Exercise from "@domain/Exercise";

import { getAllByMuscleGroup } from "@mock/exercises";

import ROUTES from "@constants/routes";

import { useAppSelector } from "@hooks/redux";

import { selectExercises } from "@store/slices/training";

import styles from "./styles";

export default function Exercises({
    navigation,
    route: {
        params: { muscleGroupId },
    },
}: NativeStackScreenProps<ROUTES, "Exercises">) {
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const selectedExercises = useAppSelector(selectExercises);

    useEffect(() => {
        let isMounted: boolean = true;
        getAllByMuscleGroup(
            muscleGroupId,
            selectedExercises.map(e => e.exerciseId),
        )
            .then(res => {
                if (isMounted) {
                    setExercises(res);
                    setLoading(false);
                }
            })
            .catch(err => {
                if (isMounted) {
                    setError(err.message());
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [muscleGroupId, selectedExercises]);

    if (loading) {
        return <ActivityIndicator size="large" />;
    }

    if (error) {
        throw new Error(error);
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {exercises.map(({ id, name, images }) => (
                <ImageButton
                    key={id}
                    text={name}
                    image={images.sort((a, b) => a.index - b.index)[0].content}
                    onPress={() =>
                        navigation.navigate("DoExercise", { exerciseId: id })
                    }
                />
            ))}
        </ScrollView>
    );
}

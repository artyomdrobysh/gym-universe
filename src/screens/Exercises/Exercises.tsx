import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import ImageButton from "@components/ImageButton";

import Exercise from "@domain/Exercise";

import { getAllByMuscleGroup } from "@store/exercises";

import ROUTES from "@constants/routes";

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

    useEffect(() => {
        let mounted = true;
        getAllByMuscleGroup(muscleGroupId)
            .then(res => {
                if (mounted) {
                    setExercises(res);
                    setLoading(false);
                }
            })
            .catch(err => {
                if (mounted) {
                    setError(err.message());
                    setLoading(false);
                }
            });

        return () => {
            mounted = false;
        };
    }, [muscleGroupId]);

    if (loading) {
        return <ActivityIndicator size="large" />;
    }

    if (error) {
        return new Error(error);
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {exercises.map(({ id, name, images }) => (
                <ImageButton
                    key={id}
                    text={name}
                    image={images.sort((a, b) => b.index - a.index)[0].content}
                    onPress={() =>
                        navigation.navigate("ExerciseDetails", { id })
                    }
                />
            ))}
        </ScrollView>
    );
}

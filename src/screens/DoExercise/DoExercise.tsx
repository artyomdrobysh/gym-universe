import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Modal, Pressable, ScrollView, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import Loader from "@components/Loader";

import { useAppDispatch } from "@hooks/redux";

import { add } from "@store/slices/training";

import { getById } from "@mock/exercises";

import Exercise from "@domain/Exercise";
import { ExerciseSet } from "@domain/Training";

import ROUTES from "@constants/routes";

import ExerciseDetails from "./ExerciseDetails";
import AddSet from "./AddSet";
import styles from "./styles";

export default function DoExercise({
    navigation,
    route: {
        params: { exerciseId },
    },
}: NativeStackScreenProps<ROUTES, "DoExercise">) {
    const orderCounter = useRef<number>(1);

    const [viewDetails, setViewDetails] = useState<boolean>(false);
    const [exercise, setExercise] = useState<Exercise | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [sets, setSets] = useState<ExerciseSet[]>([]);

    const dispatch = useAppDispatch();

    const changeSets = useCallback((reps: number, loadAmount?: number, orderNumber?: number) => {
        if (orderNumber) {
            setSets(prev =>
                prev.map(s => {
                    if (s.orderNumber === orderNumber) {
                        return {
                            ...s,
                            reps,
                            loadAmount,
                        };
                    }
                    return s;
                }),
            );
        } else {
            setSets(prev => [
                ...prev,
                { reps, orderNumber: orderCounter.current, loadAmount },
            ]);
            orderCounter.current = orderCounter.current + 1;
        }
    }, [setSets]);

    useEffect(() => {
        let isMounted: boolean = true;
        getById(exerciseId)
            .then(res => {
                if (isMounted) {
                    if (res) {
                        setExercise(res);
                    } else {
                        setError("нет такого упражнения");
                    }
                    setLoading(false);
                }
            })
            .catch(err => {
                if (isMounted) {
                    setError(err.message);
                    setLoading(false);
                }
            });
        return () => {
            isMounted = false;
        };
    }, [exerciseId]);

    if (loading) {
        return <Loader />;
    }

    if (error || !exercise) {
        throw new Error(error);
    }

    const { id, images, name, repsType, loadMeasureUnit } = exercise;

    const sortedImages = images.sort((a, b) => a.index - b.index);

    return (
        <View style={styles.container}>
            <Modal
                visible={viewDetails}
                onRequestClose={() => setViewDetails(false)}
                animationType="slide">
                <View style={[styles.container, styles.detailsContainer]}>
                    <ExerciseDetails exercise={exercise} />
                </View>
            </Modal>
            <Text style={styles.nameHeader}>{name}</Text>
            <Pressable
                style={styles.detailsBlock}
                onPress={() => setViewDetails(true)}>
                <Text style={styles.detailsBlockText}>
                    Информация об упражнении
                </Text>
                <Ionicons
                    name="information-circle-outline"
                    size={30}
                    color="black"
                />
            </Pressable>
            <ScrollView
                style={styles.setsContainer}
                showsVerticalScrollIndicator
                persistentScrollbar>
                <AddSet
                    repsType={repsType}
                    onChange={changeSets}
                    loadMeasureUnit={loadMeasureUnit}
                />
                {sets
                    .sort((a, b) => b.orderNumber - a.orderNumber)
                    .map(s => (
                        <AddSet
                            key={s.orderNumber}
                            repsType={repsType}
                            onChange={changeSets}
                            loadMeasureUnit={loadMeasureUnit}
                            preLoad={s}
                        />
                    ))}
            </ScrollView>
            <Button
                title="Добавить упражнение"
                disabled={!sets.length}
                onPress={() => addExercise(id, sortedImages[0].content)}
            />
        </View>
    );

    function addExercise(id: number, image: string) {
        try {
            dispatch(add({ exerciseId: id, exerciseImage: image, sets }));
            navigation.navigate("AddTraining");
        } catch (err) {
            navigation.navigate("AddTraining");
        }
    }
}

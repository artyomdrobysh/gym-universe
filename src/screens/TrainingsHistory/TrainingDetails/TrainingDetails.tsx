import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import date from "date-and-time";

import RemoveButton from "@components/RemoveButton";
import Loader from "@components/Loader";

import { getAllById } from "@mock/exercises";

import Exercise from "@domain/Exercise";

import ExerciseSummary from "./ExerciseSummary";
import { Props } from "./types";
import styles from "./styles";

export default function TrainingDetails({ id, start, finish, exercises, onRemove }: Props) {
    const [exercisesDetails, setExercisesDetails] = useState<Exercise[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        let isMounted: boolean = true;

        getAllById(exercises.map(e => e.exerciseId)).then(res => {
            if (isMounted) {
                setExercisesDetails(res);
                setLoading(false);
            }
        }).catch(err => {
            if (isMounted) {
                setError((err as Error).message);
                setLoading(false);
            }
        });

        return () => {
            isMounted = false;
        };
    }, [exercises]);

    if (error) {
        throw new Error(error);
    }

    const startDate = new Date(start);
    const finishDate = new Date(finish);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerDetails}>
                    <Text style={[styles.text, styles.year]}>{date.format(startDate, "YYYY")}</Text>
                    <Text style={[styles.text, styles.day]}>{date.format(startDate, "DD/MM")}</Text>
                    <Text style={styles.text}>{date.format(startDate, "HH:mm")}</Text>
                    <Text>{" \u2013 "}</Text>
                    <Text style={styles.text}>{date.format(finishDate, "HH:mm")}</Text>
                </View>
                <RemoveButton size={25} onRemove={() => onRemove(id)} style={styles.removeButton} />
            </View>
            <ScrollView nestedScrollEnabled persistentScrollbar contentContainerStyle={styles.exercises}>
                {loading ? <Loader /> : (
                    <>
                        {exercisesDetails.map(ed => (
                            <ExerciseSummary
                                key={ed.id}
                                sets={exercises.find(e => e.exerciseId === ed.id)?.sets ?? []}
                                {...ed}
                            />
                        ))}
                    </>
                )}
            </ScrollView>
        </View>
    );
}

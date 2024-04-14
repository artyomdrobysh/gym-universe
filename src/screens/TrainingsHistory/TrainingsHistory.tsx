import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import date from "date-and-time";

import Loader from "@components/Loader";

import Training from "@domain/Training";

import { getAll, removeTraining } from "@mock/trainings";

import TrainingDetails from "./TrainingDetails";

export default function TrainingsHistory() {
    const [trainings, setTrainings] = useState<Training[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [trainingToRemove, setTrainingToRemove] = useState<number | null>(null);

    useEffect(() => {
        let isMounted: boolean = true;
        setLoading(true);

        if (!trainingToRemove) {
            getAll()
                .then(res => {
                    if (isMounted) {
                        setTrainings(res);
                        setLoading(false);
                    }
                })
                .catch(err => {
                    if (isMounted) {
                        setError(err.message);
                        setLoading(false);
                    }
                });
        }

        return () => {
            isMounted = false;
        };
    }, [trainingToRemove]);

    useEffect(() => {
        let isMounted: boolean = true;
        if (trainingToRemove) {
            removeTraining(trainingToRemove).then(() => {
                if (isMounted) {
                    setTrainingToRemove(null);
                }
            }).catch(err => {
                if (isMounted) {
                    setError((err as Error).message);
                    setTrainingToRemove(null);
                }
            });
        }
        return () => {
            isMounted = false;
        };
    }, [trainingToRemove]);

    if (loading || trainingToRemove) {
        return <Loader />;
    }

    if (error) {
        throw new Error(error);
    }

    const sortedTrainings = trainings.sort((a, b) =>
        new Date(b.start).getTime() - new Date(a.start).getTime());

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={sortedTrainings}
                renderItem={({ item }) => <TrainingDetails {...item} onRemove={setTrainingToRemove} />}
            />
        </View>
    );
}

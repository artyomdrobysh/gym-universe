import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import Loader from "@components/Loader";

import Training from "@domain/Training";

import { getAll } from "@mock/trainings";

export default function TrainingsHistory() {
    const [trainings, setTrainings] = useState<Training[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        let isMounted: boolean = true;

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

        return () => {
            isMounted = false;
        };
    }, []);

    if (error) {
        throw new Error(error);
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <View style={{ flex: 1 }}>
            {trainings.map(({ id, start, finish, exercises }) => (
                <React.Fragment key={id}>
                    <Text>Start : {start.toString()}</Text>
                    <Text>Finish : {finish.toString()}</Text>
                    <Text>Exercises as JSON : {JSON.stringify(exercises)}</Text>
                </React.Fragment>
            ))}
        </View>
    );
}

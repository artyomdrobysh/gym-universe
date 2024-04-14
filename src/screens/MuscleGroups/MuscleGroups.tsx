import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import ImageButton from "@components/ImageButton";
import Loader from "@components/Loader";

import MuscleGroup from "@domain/MuscleGroup";

import { getAllByParent } from "@mock/muscle-group";

import ROUTES from "@constants/routes";

import styles from "./styles";

export default function MuscleGroups({
    navigation,
    route: { params },
}: NativeStackScreenProps<ROUTES, "MuscleGroups">) {
    const [muscleGroups, setMuscleGroups] = useState<MuscleGroup[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        let isMounted: boolean = true;
        getAllByParent(params?.parentId).then(res => {
            if (isMounted) {
                setMuscleGroups(res);
                setLoading(false);
            }
        }).catch(err => {
            if (isMounted) {
                setError(err.message);
                setLoading(false);
            }
        });

        return () => {
            isMounted = false;
        };
    }, [params?.parentId]);

    if (error) {
        throw new Error(error);
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <View style={styles.container}>
            {muscleGroups.map(({ id, name, image, childrenExists }) => (
                <ImageButton
                    key={id}
                    image={image}
                    text={name}
                    onPress={getOnClick(id, name, childrenExists)}
                />
            ))}
        </View>
    );

    function getOnClick(id: number, name: string, childrenExists: boolean) {
        return () =>
            childrenExists
                ? navigation.push("MuscleGroups", {
                    parentId: id,
                    name,
                })
                : navigation.navigate("Exercises", { muscleGroupId: id });
    }
}

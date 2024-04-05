import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import ImageButton from "@components/ImageButton";

import MuscleGroup from "@domain/MuscleGroup";

import { getAllByParent } from "@store/muscle-group";

import ROUTES from "@constants/routes";

import styles from "./styles";

export default function MuscleGroups({
    navigation,
    route: { params },
}: NativeStackScreenProps<ROUTES, "MuscleGroups">) {
    const [muscleGroups, setMuscleGroups] = useState<MuscleGroup[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    // todo add error

    useEffect(() => {
        let mounted = true;
        getAllByParent(params?.parentId).then(res => {
            if (mounted) {
                setMuscleGroups(res);
                setLoading(false);
            }
        });
        // todo add catch

        return () => {
            mounted = false;
        };
    }, [params?.parentId]);

    if (loading) {
        return <ActivityIndicator size="large" />;
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

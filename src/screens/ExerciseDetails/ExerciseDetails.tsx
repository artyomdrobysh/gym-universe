import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    ImageBackground,
    ScrollView,
    Text,
    View,
    useWindowDimensions,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Loader from "@components/Loader";

import Exercise from "@domain/Exercise";

import ROUTES from "@constants/routes";

import { getById } from "@store/exercises";

import styles from "./styles";

export default function ExerciseDetails({
    route: {
        params: { id },
    },
}: NativeStackScreenProps<ROUTES, "ExerciseDetails">) {
    const [exercise, setExercise] = useState<Exercise | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const animationScrollX = useRef(new Animated.Value(0));

    const { width: windowWidth } = useWindowDimensions();

    const scrollX = animationScrollX.current;

    useEffect(() => {
        let mounted = true;
        getById(id)
            .then(res => {
                if (mounted) {
                    if (res) {
                        setExercise(res);
                    } else {
                        setError("нет такого упражнения");
                    }
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
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (error || !exercise) {
        throw new Error(error);
    }

    const { name, images } = exercise;

    const sortedImages = images.sort((a, b) => a.index - b.index);

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator
            persistentScrollbar>
            <Text style={styles.name}>{name}</Text>

            <View style={styles.scrollContainer}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: scrollX,
                                    },
                                },
                            },
                        ],
                        { useNativeDriver: false },
                    )}
                    scrollEventThrottle={1}>
                    {sortedImages.map(i => (
                        <View
                            style={{ width: windowWidth, height: 350 }}
                            key={i.index}>
                            <ImageBackground
                                resizeMode="contain"
                                source={i.content}
                                style={styles.image}
                            />
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.indicatorContainer}>
                    {sortedImages.map(({ index }, idx) => {
                        const width = scrollX.interpolate({
                            inputRange: [
                                windowWidth * (idx - 1),
                                windowWidth * idx,
                                windowWidth * (idx + 1),
                            ],
                            outputRange: [8, 16, 8],
                            extrapolate: "clamp",
                        });
                        return (
                            <Animated.View
                                key={index}
                                style={[styles.dot, { width }]}
                            />
                        );
                    })}
                </View>
            </View>
        </ScrollView>
    );
}

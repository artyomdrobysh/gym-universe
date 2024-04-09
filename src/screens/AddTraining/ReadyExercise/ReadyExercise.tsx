import React, { memo, useRef } from "react";
import {
    Animated,
    Image,
    PanResponder,
    PanResponderInstance,
    View,
} from "react-native";

import { Props } from "./types";
import styles from "./styles";
import trainingStyles from "../styles";

export default memo(function ReadyExercise({
    image,
    exerciseId,
    onRemove,
}: Props) {
    const pan = useRef<Animated.ValueXY>(new Animated.ValueXY()).current;
    const panResponder = useRef<PanResponderInstance>(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dy: pan.y }], {
                useNativeDriver: false,
            }),
            onPanResponderRelease: (e, s) => {
                if (s.dy < -50) {
                    onRemove(exerciseId);
                } else {
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: true,
                    }).start();
                }
            },
        }),
    ).current;

    return (
        <Animated.View
            style={{ transform: [{ translateY: pan.y }] }}
            {...panResponder.panHandlers}>
            <View style={[trainingStyles.block, styles.block]}>
                <Image
                    source={image}
                    resizeMode="contain"
                    style={styles.image}
                />
            </View>
        </Animated.View>
    );
});

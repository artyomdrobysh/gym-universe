import React from "react";
import { Image, Pressable, Text } from "react-native";

import { Props } from "./types";
import styles from "./styles";

export default function ImageButton({ text, image, onPress }: Props) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.container,
                pressed ? styles.touchable : undefined,
            ]}
            onPress={onPress}>
            <Image source={image} style={styles.image} resizeMode="contain" />
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}

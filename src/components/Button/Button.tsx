import React from "react";
import { Pressable, Text } from "react-native";

import { Props } from "./types";
import styles from "./styles";

export default function Button({ title, onPress }: Props) {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
}

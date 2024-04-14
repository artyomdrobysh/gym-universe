import React from "react";
import { Pressable } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import { Props } from "./types";
import styles from "./styles";

export default function RemoveButton({ size, onRemove, style }: Props) {
    return (
        <Pressable
            onPress={onRemove}
            style={({ pressed }) => [
                style,
                pressed ? styles.pressed : undefined,
            ]}>
            <AntDesign name="delete" size={size} color="black" />
        </Pressable>
    );
}

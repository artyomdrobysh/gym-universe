import React, { memo } from "react";
import { Pressable } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import { Props } from "./types";
import styles from "./styles";
import trainingStyles from "../styles";

export default memo(function AddButton({ onPress }: Props) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed ? [styles.button, trainingStyles.block, styles.pressed] : [styles.button, trainingStyles.block]}>
            {({ pressed }) => (
                <AntDesign
                    name="pluscircleo"
                    size={50}
                    style={pressed ? styles.pressedImage : styles.image}
                />
            )}
        </Pressable>
    );
});

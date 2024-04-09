import { StyleSheet } from "react-native";

const pressedColor: string = "#0005";

export default StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        color: "rgba(0, 0, 0, 0.5)",
    },
    pressedImage: {
        color: pressedColor,
    },
    pressed: {
        borderColor: pressedColor,
    },
});

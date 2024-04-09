import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginTop: 20,
        color: "black",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        textShadowColor: "rgba(0, 0, 0, 0.5)",
        textShadowOffset: {
            width: 5,
            height: 5,
        },
        textTransform: "uppercase",
        textShadowRadius: 10,
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    image: {
        width: "100%",
    },
});

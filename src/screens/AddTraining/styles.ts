import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        alignSelf: "center",
        width: 340,
        padding: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignContent: "flex-start",
        flexWrap: "wrap",
        gap: 10,
    },
    block: {
        height: 150,
        width: 100,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: "rgba(0, 0, 0, 0.5)",
    },
});

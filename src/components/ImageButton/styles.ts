import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: "row",
        gap: 20,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 5,
        shadowColor: "black",
    },
    touchable: {
        opacity: 0.9,
    },
    image: {
        height: 70,
        width: 70,
    },
    text: {
        paddingVertical: 2,
        paddingHorizontal: 5,
        flex: 1,
        flexWrap: "wrap",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
    },
});

import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        height: 146,
        padding: 5,
    },
    text: {
        textAlign: "center",
        marginBottom: 10,
    },
    sets: {
        flexDirection: "row",
        paddingVertical: 5,
    },
    set: {
        minWidth: 100,
        height: 70,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "black",
    },
    setDetails: {
        flexDirection: "row",
        alignItems: "center",
    },
    setText: {
        color: "black",
        fontWeight: "bold",
    },
    orderNumber: {
        fontSize: 14,
        alignSelf: "flex-end",
    },
    valueText: {
        fontSize: 20,
        marginRight: 5,
    },
    loadAmount: {
        marginLeft: 10,
    },
});

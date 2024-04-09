import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 20,
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        borderWidth: 2,
        borderRadius: 10,
    },
    block: {
        justifyContent: "center",
        alignItems: "center",
        height: 55,
    },
    blockTitle: {
        fontSize: 10,
    },
    input: {
        width: 50,
        height: 45,
        padding: 5,
        shadowColor: "rgba(0, 0, 0, 1)",
        elevation: 1,
    },
    setsAddButton: {
        alignSelf: "flex-end",
        height: 55,
        justifyContent: "center",
    },
    orderNumber: {
        fontSize: 40,
        fontWeight: "bold",
    },
});

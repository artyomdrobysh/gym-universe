import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    nameHeader: {
        paddingTop: 5,
        paddingHorizontal: 5,
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
    },
    detailsContainer: {
        marginTop: 20,
    },
    detailsBlock: {
        alignSelf: "flex-end",
        paddingVertical: 2,
        paddingHorizontal: 10,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    detailsBlockText: {
        fontSize: 15,
        fontWeight: "bold",
    },
    setsContainer: {
        marginVertical: 20,
        flexGrow: 1,
        gap: 10,
    },
});

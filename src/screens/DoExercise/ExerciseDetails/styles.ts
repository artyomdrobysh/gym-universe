import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 20,
        gap: 30,
        minHeight: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    name: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
    scrollContainer: {
        height: 400,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: "hidden",
    },
    indicatorContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "black",
        marginHorizontal: 4,
    },
    activeDot: {
        height: 10,
        width: 10,
        borderRadius: 5,
    },
});

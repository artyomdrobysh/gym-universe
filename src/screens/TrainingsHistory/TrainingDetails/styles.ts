import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: 200,
        marginVertical: 20,
        marginHorizontal: 30,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
    },
    header: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: "black",
    },
    headerDetails: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 15,
    },
    year: {
        marginRight: 20,
    },
    day: {
        marginRight: 20,
    },
    removeButton: {
        alignSelf: "center",
    },
    exercises: {
        flexGrow: 1,
    },
});

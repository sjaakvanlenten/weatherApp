import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        flex: 0.3,
        alignItems: "center"
    },
    headerBar: {
        paddingTop: 10,
        paddingHorizontal: 20,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerText: {
        fontSize: 34,
        color: "#FFF"
    },
    paragraph: {
        fontSize: 18,
        color: "#FFF"
    },
    errorBox: {
        backgroundColor: "#d01b1b",
        width: "70%",
        borderRadius: 25,
        alignItems: "center"
    },
    errorText: {
        fontSize: 14,
        color: "#FFF"
    }
});

export default styles;

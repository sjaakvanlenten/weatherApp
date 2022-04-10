import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 100,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: "hidden"
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    },
    imageContainer: {
        flex: 0.7,
        justifyContent: "center",
        alignItems: "center",
        elevation: 15
    },
    textContainer: {
        flex: 0.3,
        backgroundColor: "#FFF",
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 5
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    title: {
        fontSize: 14
    },
    paragraph: {
        fontSize: 16
    }
});

export default styles;

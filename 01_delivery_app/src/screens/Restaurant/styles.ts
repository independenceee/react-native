import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    image: {
        width: "100%",
        height: 224,
        resizeMode: "contain",
        padding: 16,
        backgroundColor: "rgb(209 213 219)",
    },

    goBackIcon: {
        position: "absolute",
        top: 56,
        left: 20,
        padding: 8,
        backgroundColor: " rgb(243 244 246)",
        borderRadius: 50,
    },
    barIcon: {
        position: "absolute",
        top: 56,
        right: 20,
        padding: 8,
        backgroundColor: " rgb(243 244 246)",
        borderRadius: 50,
    },
    outer: {
        backgroundColor: "white",
    },
    inner: {
        paddingTop: 16,
        paddingHorizontal: 16,
    },

    title: {
        fontSize: 30,
        lineHeight: 36,
    },

    review: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 4,
    },

    evaluate: {
        marginRight: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    genre: {
        fontSize: 12,
        lineHeight: 16,
        color: "rgb(107 114 128)",
        marginLeft: 4,
    },
    rank: {
        color: "#00CCBB",
    },

    description: {
        color: "rgb(107 114 128)",
        marginTop: 8,
        paddingBottom: 16,
    },

    questions: {
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        padding: 16,
        borderColor: "#00CCBB",
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },

    questTionText: {
        marginHorizontal: 8,
        paddingLeft: 8,
        flex: 1,
        fontWeight: "bold",
    },

    content: {
        paddingBottom: 144,
    },

    menu: {
        paddingHorizontal: 16,
        paddingTop: 24,
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 28,
        color: "rgb(107 114 128)",
    },
});

export default styles;

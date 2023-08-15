import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {},
    container: {
        backgroundColor: "white",
        marginRight: 12,
        shadowColor: "rgba(0,0,0,0.5)",
        shadowOpacity: 10,
        marginTop: 8,
        shadowRadius: 10,
        shadowOffset: {
            height: 8,
            width: 8,
        },
    },
    image: {
        height: 144,
        width: 256,
        borderRadius: 20,

        resizeMode: "contain",
    },
    inner: {
        paddingHorizontal: 12,
        paddingBottom: 16,
    },

    title: {
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 28,
        paddingTop: 12,
    },

    content: {
        flexDirection: "row",
        alignItems: "center",
    },

    genre: {
        color: "gray",
        fontSize: 12,
        lineHeight: 16,
    },
    rating: {
        color: "#00CCBB",
    },

    location: {
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
    },
    address: {
        color: "gray",
        fontSize: 12,
        lineHeight: 16,
    },
});

export default styles;

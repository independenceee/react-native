import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {},
    heading: {
        marginTop: 16,
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 28,
    },
    description: {
        fontSize: 12,
        lineHeight: 16,
        paddingHorizontal: 16,
        color: "rgb(107, 114, 128)",
    },
    inner: {
        paddingTop: 16,
    },
});

export default styles;

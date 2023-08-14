import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        position: "relative",
        marginRight: 8,
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 8,
    },
    title: {
        position: "absolute",
        bottom: 4,
        left: 4,
        color: "white",
        fontWeight: "bold",
    },
});

export default styles;

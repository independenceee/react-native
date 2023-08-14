import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "white",
    },
    header: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        paddingBottom: 12,
        paddingHorizontal: 16,
    },
    logoImage: {
        height: 28,
        width: 28,
        padding: 12,
        backgroundColor: "#e2e8f0",
        borderRadius: 50,
    },
    logoContent: {
        flex: 1,
        marginLeft: 8,
    },
    hashTag: {
        color: "#cbd5e0",
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 16,
    },
    location: {
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: 20,
    },
    searchContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 12,
        paddingBottom: 8,
    },

    searchInner: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#e2e8f0",
        flex: 1,
        padding: 4,
        borderRadius: 2,
    },
    searchIcon: {
        bottom: 2,
    },

    container: {
        backgroundColor: "rgb(243 ,244 ,246)",
    },
});
export default styles;

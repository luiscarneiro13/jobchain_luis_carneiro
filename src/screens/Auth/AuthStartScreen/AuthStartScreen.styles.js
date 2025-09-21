import { StyleSheet } from "react-native"

export const styles = new StyleSheet.create({
    content: {
        flex: 1,
        margin: 20,
    },
    img: {
        width: "100%",
        height: 400,
        resizeMode: "contain",
    },
    title: {
        color: "#333",
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 0,
    },
    description: {
        color: "#333",
        opacity: 0.6,
        textAlign: "center",
        marginBottom: 20
    }
})
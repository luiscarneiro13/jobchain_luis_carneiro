import { StyleSheet } from "react-native"

export const styles = new StyleSheet.create({
    content: {
        paddingBottom: 0
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#f9f9f9",
        paddingVertical: 10,
        alignItems: "center",
        paddingHorizontal: 10
    },
    selected: {
        backgroundColor: "#e8ffef",
        borderWidth: 1,
        borderColor: "#63a47b",
        marginBottom: 5
    },
    name: {
        fontSize: 16
    },
    email: {
        opacity: 0.6
    }
})
import { StyleSheet } from "react-native"

export const styles = new StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#f9f9f9",
        paddingVertical: 10,
        alignItems: "center",
    },
    name: {
        // fontWeight: 600,
        fontSize: 16
    },
    email: {
        opacity: 0.6,
        marginTop: 2
    }
})
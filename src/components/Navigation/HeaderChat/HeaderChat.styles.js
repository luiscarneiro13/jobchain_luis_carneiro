import { StyleSheet } from "react-native"

export const styles = new StyleSheet.create({
    container: {
        marginTop: 30,
        height: 50
    },
    content: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 0,
    },
    info: {
        flexDirection: "row",
        alignItems: "center"
    },
    identity: {
        fontSize: 16,
        marginBottom: 1,
    }
})
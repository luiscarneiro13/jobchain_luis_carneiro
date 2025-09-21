import { StyleSheet } from "react-native"

export const styles = new StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        height: 80
    },
    infoContent: {
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#f9f9f9",
        paddingVertical: 10,
        justifyContent: "space-between",
        height: "100%"
    },
    info: {
        flex: 1
    },
    name: {
        fontWeight: "600",
        fontSize: 16
    },
    message: {
        opacity: 0.5
    },
    text: {},
    user: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#33"
    },
    notify: {
        alignItems: "flex-end"
    },
    time: {
        opacity: 0.6,
        fontSize: 12,
        marginBottom: 5
    },
    totalUnreadContent: {
        backgroundColor: "#a2e7bc",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: 20,
        height: 20,
    },
    totalUnread: {
        color: "#333",
        fontSize: 10,
        fontWeight: "bold",
    },
})
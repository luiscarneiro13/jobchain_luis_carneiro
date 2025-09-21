import { StyleSheet } from "react-native";

export const styles = new StyleSheet.create({
    content: {
        flexDirection: "row",
        alignItems: "center",
        height: 80,
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 10,
        backgroundColor:"#e3ffeb"
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
    identity: {
        // fontWeight: "600",
        fontSize: 16,
    },
    info: {
        flex: 1
    },
    message: {
        opacity: 0.4,
        fontSize: 15
    },
    totalUnreadMessages: {
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
    notify: {
        alignItems: "flex-end"
    },
    time: {
        opacity: 0.6,
        fontSize: 12,
        marginBottom: 5
    }
})
import { StyleSheet } from "react-native"

export const styles = new StyleSheet.create({
    content: {
        width: "100%",
        marginTop: 30
    },
    title: {
        fontWeight: "bold",
        fontSize: 20
    },
    list: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        marginVertical: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 12,
    },
    participant: {
        flexDirection: "row",
        paddingVertical: 5,
        alignItems: "center",
        alignContent: "space-between"
    },
    participantRight: {
        flexDirection: "row",
        paddingVertical: 5,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    addParticipant: {
        fontSize: 16,
        marginLeft: 10
    },
    info: {
        flex: 1
    },
    identity: {
        fontSize: 16,
        justifyContent: "space-between",
        fontWeight: "bold"
    },
    email: {
        opacity: 0.4,
        marginTop: 5
    },
    ban: {
        paddingVertical: 5,
        alignItems: "center",
        marginLeft:0,
        width:"10%"
    }
})
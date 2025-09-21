import { StyleSheet } from "react-native"

export const styles = new StyleSheet.create({
    content: {
        paddingHorizontal: 10,
        marginBottom: 50,
        paddingBottom: 50
    },
    item: {
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#f9f9f9",
        paddingVertical: 10,
        height: "100%"
    },
    selected: {
        backgroundColor: "#e8ffef",
        borderWidth: 1,
        borderColor: "#63a47b",
        marginBottom: 5
    },
    name: {
        // fontWeight: "600",
        fontSize: 16
    },
    email:{
        marginTop:2,
        opacity:0.6
    }
})
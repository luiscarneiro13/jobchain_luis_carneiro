import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";


export const styled = (isMe) => {

    const theme = useTheme()

    return new StyleSheet.create({
        content: {
            flexDirection: "row",
            justifyContent: isMe ? "flex-end" : "flex-start",
            marginHorizontal: 10,
            marginBottom: 10,
        },
        message: {
            flex: 1,
            backgroundColor: isMe ? theme.colors.secondary : theme.colors.tertiary,
            maxWidth: "80%",
            borderRadius: 10,
            padding: 3,
            overflow: "hidden"
        },
        image: {
            borderRadius: 10
        },
        date: {
            opacity: 0.4,
            fontSize: 12,
            marginTop: 2,
            textAlign: "right"
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 4,
        },
    })
}
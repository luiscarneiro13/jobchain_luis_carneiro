import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";


export const styled = () => {

    const theme = useTheme()

    return new StyleSheet.create({
        content: {
            position: "absolute",
            width: "100%",
            left: 0,
            bottom: 0,
            paddingHorizontal: 20,
            paddingBottom: 50,
            borderTopWidth: 1,
            backgroundColor: "#fefefe",
            borderTopColor: "#e7e7e7",
            flexDirection: "row",
            alignItems: "center"
        },
        inputContainer: {
            flex: 1,
            position: "relative"
        },
        input: {
            fontSize: 16,
            borderRadius: 50,
            marginLeft: 20,
            height:40
        },
        iconSend: {
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%"
        }
    })
}
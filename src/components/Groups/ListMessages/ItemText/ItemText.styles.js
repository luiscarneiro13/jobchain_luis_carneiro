import { StyleSheet } from "react-native"

export const styled = (isMe) => {
    return new StyleSheet.create({
        content: {
            flexDirection: "row",
            justifyContent: isMe ? "flex-end" : "flex-start",
            marginHorizontal: 10,
            marginBottom: 10,
        },
        message: {
            flex: 1,
            backgroundColor: isMe ? "#D9FDD3" : "#FFFFFF",
            maxWidth: "80%",
            borderRadius: 10,
            paddingVertical: 6,
            paddingHorizontal: 10,
            shadowColor: '#000', // Color de la sombra
            shadowOffset: { width: 0, height: 4 }, // Desplazamiento en Y
            shadowOpacity: 0.3, // Opacidad de la sombra
            shadowRadius: 4, // Difusión de la sombra
            elevation: 5, // Para Android
        },
        identity: {
            marginBottom: 5
        },
        text: {
            fontSize: 16,
        },
        date: {
            opacity: 0.4,
            fontSize: 12,
            marginTop: 2,
            textAlign: "right"
        }
    })
}
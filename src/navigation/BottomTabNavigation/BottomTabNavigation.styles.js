import { StyleSheet } from "react-native"

export const styles = new StyleSheet.create({
    tabBarStyle: {
        backgroundColor: "#fff",
        borderTopWidth: 0,
        shadowColor: "#333",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6 // Para Android
    },
     tabBarLabelStyle: {
      fontSize: 16,
      fontFamily: 'Georgia',
      fontWeight: 300,
    },
    circleBackground: {
        backgroundColor: "#deffe8", // Color verde WhatsApp
        width: 60, // Mayor ancho para el efecto ovalado
        height: 30, // Menor altura
        borderRadius: 25, // Mantiene bordes redondeados
        justifyContent: "center",
        alignItems: "center"
    }
})
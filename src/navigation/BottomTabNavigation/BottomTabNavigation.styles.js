import { StyleSheet } from "react-native"

export const styles = new StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        left: 16,
        right: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderTopWidth: 0,
        elevation: 6,
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        height: 70, // 👈 aumenta la altura para acomodar íconos + texto
        paddingBottom: 8, // 👈 da espacio interno para evitar cortes
        zIndex: 10,
    },
    tabBarLabelStyle: {
        fontSize: 16,
        fontFamily: 'Georgia',
        fontWeight: 300,
    },
    circleBackground: {
        backgroundColor: "#aab8f3ff", // Color verde WhatsApp
        width: 60, // Mayor ancho para el efecto ovalado
        height: 30, // Menor altura
        borderRadius: 25, // Mantiene bordes redondeados
        justifyContent: "center",
        alignItems: "center",
    }
})
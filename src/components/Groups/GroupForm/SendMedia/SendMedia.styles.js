import { StyleSheet } from "react-native";


export const styles = new StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0, // Hace que el modal se vea como un ActionSheet
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    closeButton: {
        padding: 15,
        // backgroundColor: '#d32f2f',
        borderRadius: 8,
        marginTop: 10,
    },
    closeButtonText: {
        fontSize: 16,
        textAlign: 'center',
        color: "#d32f2f",
    },
})
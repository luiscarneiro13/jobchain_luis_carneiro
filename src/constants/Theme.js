import { DefaultTheme } from 'react-native-paper'

const THEME = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#63a47b',
        secondary: '#e8ffef',
        tertiary: "#f9f9f9",
        errors: '#e71c1c',
        background: '#FFFFFF',
    },
    btn: {
        color: "#63a47b",
        fontWeight: "600",
        fontSize: 20,
        textAlign: "center",
        marginTop: 40
    },
    textInfo: {
        color: "#333",
        marginVertical: 15,
        opacity: 0.6
    },
    content: {
        flex: 1,
        margin: 20,
    },
    form: {
        marginBottom: 5,
        marginTop: 0
    },
    input: {
        marginTop: 10
    },
    contentScrollView: {
        marginTop: 5
    }
}

module.exports = { THEME }
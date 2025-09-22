import { StyleSheet } from "react-native"

export const styles = new StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        left: 16,
        right: 16,
        height: 80,
        backgroundColor: '#E1E9FB',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        zIndex: 10,
    },
    tabBarItemStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabBarLabelStyle: {
        fontSize: 12,
        color: '#88a',
        marginTop: 4,
        textAlign: 'center',
        includeFontPadding: false,
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
    },
    iconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeIconWrapper: {
        backgroundColor: '#e0d6ff',
    },
})
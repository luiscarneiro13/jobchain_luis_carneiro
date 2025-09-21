import { Text, View } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';

export function LoadingScreen() {

    const theme = useTheme()

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator animating={true} color={theme.colors.primary} size={40} />
            <Text style={{ color: theme.colors.primary }}>Cargando</Text>
        </View>
    )
}
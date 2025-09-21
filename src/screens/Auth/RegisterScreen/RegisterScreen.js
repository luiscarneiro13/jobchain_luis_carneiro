import { View, Text } from 'react-native'
import { styles } from "./RegisterScreen.styles"
import { useNavigation } from "@react-navigation/native"
import { useTheme } from 'react-native-paper'
import { RegisterForm } from "../../../components/Auth"

export function RegisterScreen() {
  const navigation = useNavigation()
  const theme = useTheme()
  return (
    <View style={theme.content}>
      <Text satyle={theme.text}>Crea tu cuenta y empieza a enviar mensajes</Text>

      <RegisterForm />

      <Text style={theme.btn} onPress={navigation.goBack}>Iniciar sesión</Text>

    </View>
  )
}
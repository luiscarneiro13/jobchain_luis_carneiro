import { View, Text } from 'react-native'
import { styles } from "./LoginScreen.styles"
import { useNavigation } from "@react-navigation/native"
import { screens } from "../../../utils"
import { useTheme } from "react-native-paper"
import { LoginForm } from "../../../components/Auth"

export function LoginScreen() {
  const navigation = useNavigation()
  const theme = useTheme()
  const goToRegister = () => {
    navigation.navigate(screens.auth.registerScreen)
  }
  return (
    <View style={theme.content}>

      {/* <Text style={theme.text}>Entra y empieza a chatear</Text> */}

      <LoginForm />

      {/* <Text style={theme.btn} onPress={goToRegister}>Registrarse</Text> */}

      <Text style={styles.info}>
        {/* Información adicional */}
      </Text>

    </View>
  )
}
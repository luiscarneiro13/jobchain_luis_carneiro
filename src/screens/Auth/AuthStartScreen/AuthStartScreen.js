import { View, Text, SafeAreaView, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { screens } from "../../../utils"
import { assets } from "../../../assets"
import { styles } from "./AuthStartScreen.styles"
import { useTheme } from 'react-native-paper'

export function AuthStartScreen() {

  const theme = useTheme()
  const navigation = useNavigation()

  const goToLogin = () => {
    navigation.navigate(screens.auth.loginScreen)
  }

  return (
    <SafeAreaView style={theme.content}>

      <Image source={assets.image.png.auth01} style={styles.img} />

      <View>
        <Text style={styles.title}>Te damos la bienvenida a Mi Wisa Chat</Text>
        <Text style={styles.description}>
          Apliación de la familia Carneiro Silva
        </Text>
        {/* <Text style={styles.description}>
          Consulta nuestra Política de privacidad. Pulsa "Aceptar y Continuar" para aceptar las condiciones del servicio
        </Text> */}
        <Text style={theme.btn} onPress={goToLogin}>
          Aceptar y continuar
        </Text>
      </View>

    </SafeAreaView >
  )
}
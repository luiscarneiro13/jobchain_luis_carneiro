import { Text, View } from 'react-native'
import { styles } from "./LoginForm.styles"
import { TextInput, Button, useTheme } from "react-native-paper"
import { useFormik } from "formik"
import { initialValues, validationSchema } from "./LoginForm.form"
import { Auth } from "../../../api"
import { useAuth } from "../../../hooks"
import CustomTextInput from '../../Shared/CustomTextInput'
import { NotificationContext } from "../../../contexts/NotificationContext"
import { useContext } from 'react'
import Constants from 'expo-constants'; // <-- Importa 'Constants'

const authController = new Auth()

export function LoginForm() {

  const { expoPushToken } = useContext(NotificationContext)

  const { login } = useAuth()

  const theme = useTheme()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await authController.login(formValue.email, formValue.password, expoPushToken)
        const { access, refresh } = response

        await authController.setAccessToken(access)
        await authController.setRefreshToken(refresh)

        await login(access)

      } catch (error) {
        console.error(error)
      }
    }
  })

  // Obtiene la versión del archivo app.json
  const appVersion = Constants.expoConfig.version;

  return (
    <View>
      <View style={theme.form}>

        <CustomTextInput
          style={[theme.input]}
          error={formik.errors.email}
          label="Correo electrónico"
          mode="outlined"
          value={formik.values.email}
          onChangeText={(text) => formik.setFieldValue("email", text)}
          autoCapitalize="none"
        />

        <CustomTextInput
          style={[theme.input, formik.errors.password && theme.inputError]}
          label="Contraseña"
          mode="outlined"
          error={formik.errors.password}
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue("password", text)}
          autoCapitalize="none"
        />

        <Button
          style={{ marginTop: 15 }}
          mode="contained"
          loading={formik.isSubmitting}
          onPress={formik.handleSubmit}
        >
          Iniciar Sesión
        </Button>

        {/* Usa la variable 'appVersion' para mostrar la versión */}
        <Text style={{ marginTop: 50 }}>Versión {appVersion}</Text>

      </View>
    </View>
  )
}
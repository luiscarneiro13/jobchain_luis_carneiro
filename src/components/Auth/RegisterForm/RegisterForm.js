import { View } from 'react-native'
import { styles } from "./RegisterForm.styles"
import { TextInput, Button, useTheme } from "react-native-paper"
import { useFormik } from "formik"
import { useNavigation } from "@react-navigation/native"
import { initialValues, validationSchema } from "./RegisterForm.form"
import { Auth } from "../../../api"
import CustomTextInput from '../../Shared/CustomTextInput'

const authController = new Auth()

export function RegisterForm() {

  const navigation = useNavigation()
  const theme = useTheme()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async (formValue) => {
      try {

        await authController.register(formValue.email, formValue.password)
        navigation.goBack()

      } catch (error) {
        console.error(error)
      }
    }
  })

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
          Crear Cuenta
        </Button>

      </View>
    </View>
  )
}
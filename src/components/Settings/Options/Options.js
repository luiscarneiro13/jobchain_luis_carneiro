import { Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from "./Options.styles"
import * as ImagePicker from "expo-image-picker"
import { imageExpoFormat, screens } from "../../../utils"
import { User } from "../../../api"

const userController = new User()

export function Options(props) {

  const { logout, accessToken, updateUser } = props
  const navigation = useNavigation()

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      const file = imageExpoFormat(result.assets[0].uri)
      updateUserData({ avatar: file })
    }
  }

  const updateUserData = async (userData) => {

    try {
      const response = await userController.updateUser(accessToken, userData)
      updateUser("avatar", response.avatar)

    } catch (error) {
      throw error
    }

  }

  const goChangeFirstName = () => {
    navigation.navigate(screens.tab.settings.changeFirstNameScreen)
  }

  const goChangeLastName = () => {
    navigation.navigate(screens.tab.settings.changeLastNameScreen)
  }

  return (
    <View style={styles.content}>

      <TouchableOpacity style={styles.item} onPress={openGallery}>
        <Text style={styles.text}>Cambiar foto de perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={goChangeFirstName}>
        <Text style={styles.text}>Cambiar nombre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={goChangeLastName}>
        <Text style={styles.text}>Cambiar apellido</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.item, styles.itemClose]} onPress={logout}>
        <Text style={styles.textClose}>Cerrar sesión</Text>
      </TouchableOpacity>

    </View>
  )
}

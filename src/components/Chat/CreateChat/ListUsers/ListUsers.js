import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useTheme } from 'react-native-paper'
import { Avatar } from 'react-native-paper'
import { useNavigation } from "@react-navigation/native"
import { map } from "lodash"
import { styles } from "./ListUsers.styles"
import { ENV, getDisplayName } from "../../../../utils"
import { Chat } from "../../../../api"
import { useAuth } from "../../../../hooks"
import { AvatarUser } from '../../../Shared/AvatarUser'

const chatController = new Chat()

export function ListUsers(props) {

  const { users } = props
  const auth = useAuth()

  const theme = useTheme()
  const navigation = useNavigation()

  const createChat = async (user) => {

    try {

      await chatController.create(auth.accessToken, auth.user._id, user._id)

      navigation.goBack()


    } catch (error) {
      console.error(error)
    }

  }

  return (
    <ScrollView style={theme.contentScrollView} showsVerticalScrollIndicator={false}>
      {
        map(users, (user) => (
          <TouchableOpacity key={user._id} style={styles.item} onPress={() => createChat(user)}>

            <View style={{ marginRight: 10 }}>
              <AvatarUser user={user} />
            </View>

            <View>
              <Text style={styles.name}>
                {getDisplayName(user)}
              </Text>
              <Text style={styles.email}>
                {user.email}
              </Text>
            </View>

          </TouchableOpacity>
        ))
      }
    </ScrollView>
  )
}
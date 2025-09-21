import { View, Text, Pressable } from 'react-native'
import { styled } from "./ItemImage.styles"
import { useNavigation } from '@react-navigation/native'
import { DateTime } from 'luxon'
import { useAuth } from '../../../../hooks'
import { ENV, screens, shouldShowBlueCheck } from '../../../../utils'
import AutoHeightImage from 'react-native-auto-height-image'
import { Icon } from 'react-native-paper'


export function ItemImage(props) {

  const { message } = props
  const { user } = useAuth()
  const isMe = user._id === message.user._id
  const styles = styled(isMe)
  const createMessage = new Date(message.createdAt)
  const navigation = useNavigation()
  const imageUri = `${ENV.BASE_PATH}/${message.message}`
  const showBlueCheck = shouldShowBlueCheck(message, user, isMe)

  const onOpenImage = () => {
    navigation.navigate(screens.global.imageFullScreen, { uri: imageUri })
  }

  return (
    <View style={styles.content}>
      <View style={styles.message}>
        <Pressable onPress={onOpenImage}>
          <AutoHeightImage width={300} maxHeight={400} source={{ uri: imageUri }} style={styles.image} />
        </Pressable>
        <View style={styles.row}>
          <Icon style={styles.read} source="check-all" color={showBlueCheck} size={16} />
          <Text style={styles.date}>
            {DateTime.fromISO(createMessage.toISOString()).toFormat("hh:mm a").toLowerCase()}
          </Text>
        </View>
      </View>
    </View>
  )
}
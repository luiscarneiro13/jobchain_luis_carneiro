import { View, Text } from 'react-native'
import { styles } from "./ItemText.styles"
import { DateTime } from 'luxon'
import { useAuth } from '../../../../hooks'
import { styled } from './ItemText.styles'
import { Icon } from 'react-native-paper'
import { shouldShowBlueCheck } from '../../../../utils'

export function ItemText(props) {

  const { message } = props
  const { user } = useAuth()

  const isMe = user._id === message.user._id
  const styles = styled(isMe)
  const createMesage = new Date(message.createdAt)
  const showBlueCheck = shouldShowBlueCheck(message, user, isMe)

  return (
    <View style={styles.content}>
      <View style={styles.message}>
        <Text style={styles.text}>{message.message}</Text>
        <View style={styles.row}>
          <Icon style={styles.read} source="check-all" color={showBlueCheck} size={16} />
          <Text style={styles.date}>
            {
            DateTime
            .fromISO(createMesage.toISOString())
            .toFormat("hh:mm a").toLowerCase()
            }
          </Text>
        </View>
      </View>
    </View>
  )
}
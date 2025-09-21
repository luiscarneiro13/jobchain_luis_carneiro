import { View, Text } from 'react-native'
import { styled } from "./ItemText.styles"
import { DateTime } from "luxon"
import { useAuth } from '../../../../hooks'
import { getDisplayName } from '../../../../utils'


export function ItemText(props) {

    const { message } = props
    const { user } = useAuth()
    const createMesage = new Date(message.createdAt)

    const isMe = user._id === message.user._id
    const styles = styled(isMe)

    return (
        <View style={styles.content}>
            <View style={styles.message}>
                {!isMe && (
                    <Text style={styles.identity}>
                        {getDisplayName(message.user)}
                    </Text>
                )}
                {isMe && (
                    <Text style={{ fontWeight: "bold" }}>
                        Yo
                    </Text>
                )}
                <Text style={styles.text}>{message.message}</Text>
                <Text style={styles.date}>{DateTime.fromISO(createMesage.toISOString()).toFormat("HH:mm")}</Text>
            </View>
        </View>
    )
}
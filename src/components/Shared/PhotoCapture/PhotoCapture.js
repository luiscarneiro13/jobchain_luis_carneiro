import { View, Image } from 'react-native'
import { styles } from "./PhotoCapture.styles"
import { ActivityIndicator, IconButton, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { ChatMessage, GroupMessage } from '../../../api'
import { useAuth } from '../../../hooks'
import { imageExpoFormat } from '../../../utils'
import * as FileSystem from "expo-file-system"

const chatMessageController = new ChatMessage()
const groupMessageController = new GroupMessage()

export function PhotoCapture(props) {

    const { photo, type, id } = props
    const navigation = useNavigation()
    const { accessToken } = useAuth()

    const [loading, setLoading] = useState(false)

    const sendMedia = async () => {
        try {

            setLoading(true)

            const file = imageExpoFormat(photo.uri)

            if (type === "chat") {
                await chatMessageController.sendImage(accessToken, id, file)
            }

            if (type === "group") {
                await groupMessageController.sendImage(accessToken, id, file)
            }

            setLoading(false)
            navigation.goBack()

        } catch (error) {
            setLoading(false)
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: photo.uri }} alt='Foto' style={styles.photo} />
            <View style={styles.topActions}>
                <IconButton icon="" />
                <IconButton onPress={navigation.goBack} iconColor="#ffffff" icon="close" size={30} />
                <IconButton icon="" />
            </View>
            <View style={styles.bottomActions}>
                <IconButton icon="" />

                {
                    loading ?
                        <ActivityIndicator animating={true} color="#FFFFFF" size={40} />
                        :
                        <IconButton onPress={sendMedia} iconColor="#ffffff" icon="check-circle-outline" size={70} />
                }

                <IconButton icon="" />
            </View>
        </View>
    )
}
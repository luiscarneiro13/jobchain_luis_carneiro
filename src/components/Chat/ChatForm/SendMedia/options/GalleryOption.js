import { Button } from "react-native-paper"
import * as ImagePicker from "expo-image-picker"
import { imageExpoFormat } from "../../../../../utils"
import { ChatMessage } from "../../../../../api"

const chatMessageController = new ChatMessage()

export function GalleryOption(props) {

    const { onClose, chatId, accessToken } = props

    const openGallery = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1
        })

        if (!result.canceled) {
            sendImage(result.assets[0].uri)
        }
    }

    const sendImage = async (uri) => {
        try {

            const file = imageExpoFormat(uri)
            await chatMessageController.sendImage(accessToken, chatId, file)
            onClose()

        } catch (error) {
            console.error(error);

        }
    }

    return (
        <Button labelStyle={{ fontSize: 20 }} icon="image" mode="text" onPress={openGallery}>
            Galería
        </Button>
    )
}

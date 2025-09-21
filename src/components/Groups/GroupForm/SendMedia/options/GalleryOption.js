import { Button } from "react-native-paper"
import * as ImagePicker from "expo-image-picker"
import { imageExpoFormat } from "../../../../../utils"
import { GroupMessage } from "../../../../../api"

const groupMessageController = new GroupMessage()

export function GalleryOption(props) {

    const { onClose, groupId, accessToken } = props

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
            await groupMessageController.sendImage(accessToken, groupId, file)
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
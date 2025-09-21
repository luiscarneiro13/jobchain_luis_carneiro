import { Button } from "react-native-paper"
import { Camera } from "expo-camera"
import { imageExpoFormat, screens } from "../../../../../utils"
import { ChatMessage } from "../../../../../api"
import { useNavigation } from "@react-navigation/native"

const chatMessageController = new ChatMessage()

export function CameraOption(props) {

    const { onClose, chatId, accessToken } = props

    const navigation = useNavigation()

    const openCamera = async () => {

        const { status } = await Camera.requestCameraPermissionsAsync()

        if (status !== "granted") {
            console.error(error);
        } else {
            onClose() //Cierro el modal para abrir la cámara
            navigation.navigate(screens.global.cameraScreen, {
                type: "chat",
                id: chatId
            })
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
        <Button labelStyle={{ fontSize: 20 }} icon="camera" mode="text" onPress={openCamera}>
            Cámara
        </Button>
    )
}

import { Button } from "react-native-paper"
import { Camera } from "expo-camera"
import { imageExpoFormat, screens } from "../../../../../utils"
import { GroupMessage } from "../../../../../api"
import { useNavigation } from "@react-navigation/native"

const groupMessageController = new GroupMessage()

export function CameraOption(props) {

    const { onClose, groupId, accessToken } = props

    const navigation = useNavigation()

    const openCamera = async () => {

        const { status } = await Camera.requestCameraPermissionsAsync()

        if (status !== "granted") {
            console.error(error);
        } else {
            onClose() //Cierro el modal para abrir la cámara
            navigation.navigate(screens.global.cameraScreen, {
                type: "group",
                id: groupId
            })
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
        <Button labelStyle={{ fontSize: 20 }} icon="camera" mode="text" onPress={openCamera}>
            Cámara
        </Button>
    )
}

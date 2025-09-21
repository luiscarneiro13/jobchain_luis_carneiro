import { View, Text, Pressable } from 'react-native'
import { styles } from "./Info.styles"
import { AvatarGroup } from '../../../Shared/AvatarGroup'
import { ENV, imageExpoFormat, screens } from '../../../../utils'
import { Icon } from 'react-native-paper'
import { Group } from '../../../../api'
import * as ImagePicker from "expo-image-picker"
import { useAuth } from '../../../../hooks'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const groupController = new Group()

export function Info(props) {

    const { group, setGroup } = props
    const { accessToken } = useAuth()
    const navigation = useNavigation()

    const openGallery = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1
        })

        if (!result.canceled) {
            updateImage(result.assets[0].uri)
        }
    }

    const updateImage = async (uri) => {
        try {
            const file = imageExpoFormat(uri)
            const response = await groupController.update(accessToken, group._id, { file })

            setGroup({ ...group, image: response.image })

        } catch (error) {
            console.error(error)
        }
    }

    const openChangeNameGroup = () => {
        navigation.navigate(screens.global.changeNameGroupScreen, { groupId: group._id, groupName: group.name })
    }

    return (
        <View style={styles.content}>

            <Pressable onPress={openGallery}>
                <AvatarGroup size={120} uri={`${ENV.BASE_PATH}/${group.image}`} />
            </Pressable>

            <Text style={styles.name} onPress={openChangeNameGroup}>
                {group.name} <Icon source="information-outline" color="#333" size={25} />
            </Text>

            <Text style={styles.type}>Grupo</Text>

        </View>
    )
}
import { View, Text, SafeAreaView, Pressable } from 'react-native'
import { styles } from "./HeaderGroup.styles"
import { IconButton } from 'react-native-paper'
import { ENV, screens } from "../../../utils"
import { AvatarGroup } from '../../Shared/AvatarGroup'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Group } from '../../../api'
import { useAuth } from '../../../hooks'


const groupController = new Group()

export function HeaderGroup(props) {

    const { groupId } = props
    const navigation = useNavigation()
    const { accessToken } = useAuth()

    const [group, setGroup] = useState(null)

    useEffect(() => {
        (async () => {
            try {

                const response = await groupController.obtain(accessToken, groupId)
                setGroup(response)

            } catch (error) {
                console.error(error);
            }
        })()
    }, [groupId])


    const gtoToGroupProfile = () => {
        navigation.navigate(screens.global.groupProfileScreen, { groupId })
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.info}>
                        {group && (
                            <Pressable onPress={gtoToGroupProfile} style={styles.info}>
                                <IconButton
                                    icon="chevron-left"
                                    iconColor="#000"
                                    size={35}
                                    onPress={navigation.goBack}
                                />

                                {group && (
                                    <Pressable onPress={gtoToGroupProfile} style={styles.info} >

                                        <AvatarGroup uri={`${ENV.BASE_PATH}/${group.image}`} />

                                        <Text style={styles.name}>
                                            {group.name}
                                        </Text>
                                    </Pressable>
                                )}
                            </Pressable>
                        )}
                    </View>
                    <View>
                        <IconButton
                            icon="delete"
                            size={25}
                        />
                    </View>
                </View>
            </SafeAreaView>

            {/* <AlertConfirm
                show={showDelete}
                onClose={openCloseDelete}
                textConfirm="Eliminar"
                onConfirm={deleteChat}
                title="Eliminar mensaje"
                message="Estás seguro de que quieres eliminar el chat?"
                isDanger
            /> */}

        </>

    )
}
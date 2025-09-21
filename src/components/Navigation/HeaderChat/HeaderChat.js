import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, SafeAreaView, Pressable } from 'react-native'
import { IconButton, useTheme, } from 'react-native-paper'
import { styles } from "./HeaderChat.styles"
import { Chat } from "../../../api"
import { useAuth } from "../../../hooks"
import { AvatarUser } from '../../Shared/AvatarUser'
import { AlertConfirm } from "../../Shared"
import { screens } from "../../../utils"

const chatController = new Chat()

export function HeaderChat(props) {

    const { chatId } = props
    const [userChat, setUserChat] = useState(null)
    const [showDelete, setShowDelete] = useState(false)

    const navigation = useNavigation()
    const theme = useTheme()
    const { accessToken, user } = useAuth()


    useEffect(() => {
        (async () => {
            try {
                const response = await chatController.obtain(accessToken, chatId)
                const otherUser = user._id !== response.participant_one._id ? response.participant_one : response.participant_two
                setUserChat(otherUser)
            } catch (error) {
                console.error(error);

            }
        })()
    }, [chatId])

    const openCloseDelete = () => setShowDelete((prevState) => !prevState)

    const deleteChat = async () => {

        try {

            await chatController.remove(accessToken, chatId)
            openCloseDelete()
            navigation.goBack()

        } catch (error) {
            console.error(error);

        }

    }

    const goToSuerProfile = () => {
        navigation.navigate(screens.global.userProfileScreen, {
            userId: userChat._id
        })
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.info}>
                        {userChat && (
                            <Pressable onPress={goToSuerProfile} style={styles.info}>
                                <IconButton
                                    icon="chevron-left"
                                    iconColor="#000"
                                    size={35}
                                    onPress={navigation.goBack}
                                />
                                <AvatarUser user={userChat} header={true} />

                                <Text style={styles.identity}>
                                    {
                                        userChat?.firstname || userChat?.lastname
                                            ?
                                            `${userChat?.firstname || ""} ${userChat?.lastname || ""}`
                                            :
                                            userChat?.email
                                    }
                                </Text>
                            </Pressable>
                        )}
                    </View>
                    <View>
                        <IconButton
                            icon="delete"
                            size={25}
                            onPress={openCloseDelete}
                        />
                    </View>
                </View>
            </SafeAreaView>

            <AlertConfirm
                show={showDelete}
                onClose={openCloseDelete}
                textConfirm="Eliminar"
                onConfirm={deleteChat}
                title="Eliminar mensaje"
                message="Estás seguro de que quieres eliminar el chat?"
                isDanger
            />

        </>
    )
}
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from "./Item.styles"
import { AvatarGroup } from '../../../Shared/AvatarGroup'
import { ENV, screens, socket } from '../../../../utils'
import { GroupMessage, UnreadMessages } from "../../../../api"
import { useEffect, useState } from 'react'
import { useAuth } from '../../../../hooks'
import { isEmpty } from "lodash"
import { DateTime } from 'luxon'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const groupMessageController = new GroupMessage()
const unreadMessagesController = new UnreadMessages()

export function Item(props) {

    const { group, upGroupChat } = props
    const { accessToken, user } = useAuth()
    const navigation = useNavigation()
    const [totalUnreadMessages, setTotalUnreadMessages] = useState(0)
    const [lastMessage, setLastMessage] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const totalMessages = await groupMessageController.getTotal(accessToken, group._id)
                const totalReadMessages = await unreadMessagesController.getTotalReadMessages(group._id)

                setTotalUnreadMessages(totalMessages - totalReadMessages)
            } catch (error) {
                console.error(error);

            }
        })()
    }, [group._id])

    useEffect(() => {
        (async () => {
            try {
                const response = await groupMessageController.getLastMessage(accessToken, group._id)
                if (!isEmpty(response)) setLastMessage(response)
            } catch (error) {
                console.error(error);
            }
        })()
    }, [group._id])

    useEffect(() => {
        socket.emit("subscribe", `${group._id}_notify`)
        socket.on("message_notify", newMessage)
    }, [])


    const openGroup = () => {
        setTotalUnreadMessages(0)
        navigation.navigate(screens.global.groupScreen, { groupId: group._id })
    }

    const newMessage = async (newMsg) => {
        if (newMsg.group === group._id) {
            if (newMsg.user._id !== user._id) {//Porque cuando yo escribo, estoy dentro del chat

                upGroupChat(newMsg.group)
                setLastMessage(newMsg)

                const activeGroupId = await AsyncStorage.getItem(ENV.ACTIVE_GROUP_ID)

                if (activeGroupId !== newMsg.group) {
                    setTotalUnreadMessages((prevState) => prevState + 1)
                }

            }
        }
    }

    return (
        <TouchableOpacity style={styles.content} onPress={openGroup}>
            <AvatarGroup uri={`${ENV.BASE_PATH}/${group.image}`} size={60} />
            <View style={styles.infoContent}>
                <View style={styles.info}>

                    <Text style={styles.name}>{group.name}</Text>

                    <Text style={styles.message} numberOfLines={2}>

                        <Text style={styles.user}>{lastMessage ? `${lastMessage.user?.firstname || lastMessage.user.email}: ` : ""}</Text>

                        <Text style={styles.text}>
                            {lastMessage ? lastMessage.message : ""}
                        </Text>

                    </Text>

                </View>
                <View style={styles.notify}>

                    {lastMessage ? <Text style={styles.time}>{DateTime.fromISO(new Date(lastMessage.createdAt).toISOString()).toFormat("HH:mm")}</Text> : null}

                    {totalUnreadMessages ?
                        <View style={styles.totalUnreadContent}>
                            <Text style={styles.totalUnread}>
                                {totalUnreadMessages < 99 ? totalUnreadMessages : 99}
                            </Text>
                        </View> : null
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './Item.styles'
import { useEffect, useState, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Icon, useTheme } from 'react-native-paper' // <-- Agregado Icon y useTheme
import { size, isEmpty } from "lodash"
import { ENV, getDisplayName, screens, socket } from '../../../../utils'
import { useAuth } from '../../../../hooks'
import { AvatarUser } from '../../../Shared/AvatarUser'
import { Chat, ChatMessage, UnreadMessages } from '../../../../api'
import { DateTime } from "luxon"
import { AlertConfirm } from '../../../../components/Shared'
import AsyncStorage from '@react-native-async-storage/async-storage'

const chatController = new Chat()
const chatMessageController = new ChatMessage()
const unreadMessagesController = new UnreadMessages()

export function Item(props) {

    const { chat, onReload, upTopChat } = props
    const { accessToken, user } = useAuth()
    const [lastMessage, setLastMessage] = useState(null)
    const [totalUnreadMessages, setTotalUnreadMessages] = useState(0)
    const [showDelete, setShowDelete] = useState(false)
    const theme = useTheme(); // <-- Agregado useTheme para acceder a los colores

    const navigation = useNavigation()

    useEffect(() => {
        (async () => {
            try {
                const totalMessages = await chatMessageController.getTotal(accessToken, chat._id)
                if (!isEmpty(totalMessages)) {
                    setTotalUnreadMessages(totalMessages.total)
                }
            } catch (error) {
                console.error(error);
            }
        })()
    }, [chat._id])


    useEffect(() => {
        (async () => {
            try {
                const response = await chatMessageController.getLastMessage(accessToken, chat._id)
                if (!isEmpty(response)) {
                    setLastMessage(response)
                }
            } catch (error) {
                console.error(error);
            }
        })()
    }, [chat._id])


    const { participant_one, participant_two } = chat

    const userChat = user._id === participant_one._id ? participant_two : participant_one

    const openCloseDelete = () => setShowDelete(prevState => !prevState)

    const openChat = () => {
        setTotalUnreadMessages(0)
        navigation.navigate(screens.global.chatScreen, { chatId: chat._id })
    }

    const deleteChat = async () => {
        try {
            await chatController.remove(accessToken, chat._id)
            openCloseDelete()
            onReload()
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        socket.emit("subscribe", `${chat._id}_notify`)
        socket.on("message_notify", newMessage)
        return () => {
            socket.emit("unsubscribe", `${chat._id}_notify`)
            socket.off("message_notify", newMessage)
        }
    }, [chat, newMessage])

    const newMessage = useCallback(async (newMessage) => {
        if (newMessage.chat === chat._id) {
            if (newMessage.user._id !== user._id) {
                upTopChat(newMessage.chat)
                setLastMessage(newMessage)
                const activeChatId = await AsyncStorage.getItem(ENV.ACTIVE_CHAT_ID)
                if (activeChatId !== newMessage.chat) {
                    setTotalUnreadMessages((prevState) => prevState + 1)
                }
            }
        }
    }, [chat, user, upTopChat])

    // Lógica para formatear el mensaje y la fecha/hora
    // Se ha modificado para que el icono y la palabra 'Foto' estén en la misma línea
    const formattedLastMessage = lastMessage ? (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* Lógica unificada para el remitente */}
            {lastMessage.user === user._id ? (
                <Text style={{ color: theme.colors.text, fontWeight: "bold", marginRight: 5 }}>Tú: </Text>
            ) : (
                <Text></Text>
            )}

            {lastMessage.type === "IMAGE" ? (
                // Si es una imagen, muestra el ícono y "Foto"
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon source="image" size={16} color={theme.colors.text} />
                    <Text style={{ color: theme.colors.text, marginLeft: 5 }}>Foto</Text>
                </View>
            ) : (
                // Si es un mensaje de texto, muestra el contenido cortado a 20 caracteres
                <Text style={{ color: theme.colors.text, flexShrink: 1 }}>
                    {lastMessage.message.length > 40 ? `${lastMessage.message.slice(0, 40)}...` : lastMessage.message}
                </Text>
            )}
        </View>
    ) : null;

    // Lógica mejorada para formatear la fecha/hora
    const formattedTime = lastMessage ? (() => {
        const lastMessageDate = DateTime.fromISO(new Date(lastMessage.createdAt).toISOString());
        const today = DateTime.local().startOf('day');
        const yesterday = today.minus({ days: 1 });
        const fiveDaysAgo = today.minus({ days: 6 });

        // 1. Si es Hoy, muestra la hora
        if (lastMessageDate.startOf('day').toMillis() === today.toMillis()) {
            return lastMessageDate.toFormat("hh:mm a").toLowerCase();
            // 2. Si es Ayer, muestra "Ayer"
        } else if (lastMessageDate.startOf('day').toMillis() === yesterday.toMillis()) {
            return "Ayer";
            // 3. Si está entre ayer y hace 5 días, muestra el día de la semana
        } else if (lastMessageDate >= fiveDaysAgo && lastMessageDate < yesterday) {
            const dayName = lastMessageDate.setLocale('es-ES').toLocaleString({ weekday: 'long' });
            return dayName.charAt(0).toUpperCase() + dayName.slice(1);
            // 4. Si es más antiguo, muestra la fecha completa
        } else {
            return lastMessageDate.toFormat("dd/MM/yyyy");
        }
    })() : "";

    return (
        <>
            <TouchableOpacity style={styles.content} onPress={openChat} onLongPress={openCloseDelete}>

                <AvatarUser user={userChat} />

                <View style={styles.infoContent}>
                    <View style={styles.info}>
                        <Text style={styles.identity}>
                            {getDisplayName(userChat)}
                        </Text>
                        {/* Se renderiza el componente View que ahora contiene formattedLastMessage */}
                        <View style={styles.message} numberOfLines={2}>
                            {formattedLastMessage}
                        </View>
                    </View>

                    <View style={styles.notify}>
                        {lastMessage ? (
                            <Text style={styles.time}>
                                {formattedTime}
                            </Text>
                        ) : null}

                        {totalUnreadMessages > 0 ? (
                            <View style={styles.totalUnreadMessages}>
                                <Text style={styles.totalUnread}>
                                    {totalUnreadMessages < 99 ? totalUnreadMessages : "99+"}
                                </Text>
                            </View>
                        ) : null}
                    </View>
                </View>
            </TouchableOpacity>

            <AlertConfirm
                show={showDelete}
                onClose={openCloseDelete}
                textConfirm="Eliminar"
                onConfirm={deleteChat}
                title="Eliminar chat"
                message={`¿Estás seguro de que quieres eliminar el chat con ${userChat.email}?`}
                isDanger
            />
        </>
    )
}
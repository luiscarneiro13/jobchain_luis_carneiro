import { View, Text, ScrollView } from 'react-native'
import { styles } from './ListChat.styles'
import { map, size } from "lodash"
import { Item } from './Item'
import { useTheme } from 'react-native-paper'


export function ListChat(props) {

    const { chats, onReload, upTopChat } = props

    return (
        <ScrollView alwaysBounceVertical={false}>
            <View>
                {size(chats) === 0 ? (
                    <Text style={styles.noChats}>No tienes ningún chat</Text>
                ) : null}

                {map(chats, (chat) => (
                    <Item key={chat._id} chat={chat} onReload={onReload} upTopChat={upTopChat} />
                ))}

            </View>
        </ScrollView>
    )
}
import { View, Text, ScrollView } from 'react-native'
import { styles } from "./ListMessages.styles"
import { map } from "lodash"
import { ItemText } from "./ItemText"
import { ItemImage } from './ItemImage'
import { useRef } from 'react'

export function ListMessages(props) {

    const { messages } = props
    const scrollViewRef = useRef()

    return (
        <ScrollView ref={scrollViewRef} style={styles.container} alwaysBounceVertical={false} onContentSizeChange={() => {
            scrollViewRef.current.scrollToEnd({ animated: true })
        }}>
            <View style={styles.content}>

                {map(messages, (message) => {
                    if (message.type === "TEXT") { return (<ItemText key={message._id} message={message} />) }
                    if (message.type === "IMAGE") { return (<ItemImage key={message._id} message={message} />) }
                })}

            </View>
        </ScrollView>
    )
}
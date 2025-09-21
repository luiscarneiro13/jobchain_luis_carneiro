import { View, Text, ScrollView } from 'react-native'
import { styles } from './ListGroups.styles'
import { map, size } from "lodash"
import { useTheme } from 'react-native-paper'
import { Item } from "./Item"

export function ListGroups(props) {

    const { groups, upGroupChat } = props
    const theme = useTheme()

    return (
        <ScrollView style={theme.contentScrollView} alwaysBounceVertical={false}>
            <View style={styles.content}>
                {size(groups) === 0 ? (
                    <Text style={styles.noGroups}>No tienes grupos creados</Text>
                ) : (
                    map(groups, (group) => (
                        <Item key={group._id} group={group} upGroupChat={upGroupChat} />
                    ))
                )}
            </View>
        </ScrollView>
    )
}
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from "./ListUserAddParticipants.styles"
import { AvatarUser } from '../../Shared/AvatarUser'
import { useNavigation } from '@react-navigation/native'
import { map, size } from "lodash"
import { ENV, getFullNameUser } from '../../../utils'
import { useEffect, useState } from 'react'
import { IconButton } from 'react-native-paper'

export function ListUserAddParticipants(props) {

    const { users, addParticipants } = props
    const navigation = useNavigation()
    const [ids, setIds] = useState([])

    useEffect(() => {

        navigation.setOptions({
            headerRight: () => {
                if (size(ids) > 0) {
                    return (<IconButton icon="check-circle" iconColor="#63a47b" onPress={onAddParticipants} />)
                } else {
                    return null
                }
            }
        })


    }, [ids])


    const selectedUnSelectedUser = (user) => {
        const isFound = ids.includes(user._id)

        if (isFound) {
            const newArray = ids.filter((userId) => userId !== user._id)
            setIds(newArray)
        } else {
            setIds((prevState) => [...prevState, user._id])
        }

    }

    const isSelectedUser = (userId) => {
        return ids.includes(userId)
    }

    const onAddParticipants = () => {
        addParticipants(ids)
    }

    return (
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

            {map(users, (user) => (

                <TouchableOpacity key={user._id} style={[styles.item, isSelectedUser(user._id) && styles.selected]} onPress={() => selectedUnSelectedUser(user)}>

                    <AvatarUser user={user} />

                    <View style={styles.info}>
                        <Text style={styles.name}>
                            {getFullNameUser(user)}
                        </Text>
                        <Text style={styles.email}>{user.email}</Text>
                    </View>

                </TouchableOpacity>

            ))}

        </ScrollView>
    )
}
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from "./ListUsers.styles"
import { useEffect, useState } from 'react'
import { AvatarUser } from '../../../Shared/AvatarUser'
import { IconButton, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { map, size } from "lodash"
import { ENV, getFullNameUser } from '../../../../utils'

export function ListUsers(props) {

    const { users, nextStep, setUsersIds } = props
    const [ids, setIds] = useState([])

    const theme = useTheme()
    const navigation = useNavigation()

    const onNextStep = () => {
        setUsersIds(ids)
        nextStep()
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                if (size(ids) > 0) {
                    return (
                        <IconButton icon="check-circle" iconColor="#63a47b" onPress={onNextStep} />
                    )
                }
                return null
            }
        })
    }, [ids])


    const selectedUnselectedUser = (user) => {

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

    return (
        <ScrollView style={theme.contentScrollView} showsVerticalScrollIndicator={false}>
            {map(users, (user) => (
                <TouchableOpacity
                    key={user._id}
                    style={[styles.item, isSelectedUser(user._id) && styles.selected]}
                    onPress={() => selectedUnselectedUser(user)}
                >
                    <AvatarUser user={user} />

                    <View>
                        <Text style={styles.name}>
                            {getFullNameUser(user)}
                        </Text>
                        <Text style={styles.email}>
                            {user.email}
                        </Text>
                    </View>

                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}
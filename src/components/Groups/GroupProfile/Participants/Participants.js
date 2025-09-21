import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './Participants.styles'
import { map, size } from "lodash"
import { Avatar, Button } from 'react-native-paper'
import { ENV, screens } from '../../../../utils'
import { AvatarUser } from '../../../Shared/AvatarUser'
import { useAuth } from '../../../../hooks'
import { Group } from '../../../../api'
import { useNavigation } from '@react-navigation/native'

const groupController = new Group()

export function Participants(props) {

    const { group: { _id, participants }, onReload } = props
    const { accessToken, user } = useAuth()
    const navigation = useNavigation()

    const banFromGroup = async (participant) => {
        try {
            await groupController.ban(accessToken, _id, participant._id)
            onReload()
        } catch (error) {
            console.error(error)
        }
    }

    const openAddParticipant = () => {
        navigation.navigate(screens.global.addUserGroupScreen, { groupId: _id })
    }

    return (
        <View style={styles.content}>

            <Text style={styles.title}>{size(participants)} Participantes</Text>

            <View style={styles.list}>

                <TouchableOpacity style={[styles.participantRight, { marginBottom: 10 }]} onPress={openAddParticipant}>
                    <Text style={styles.addParticipant}>Agregar paticipante</Text>
                    <Avatar.Icon size={30} icon="plus" color='#FFF' style={{ marginLeft: 15 }} />
                </TouchableOpacity>

                {map(participants, (participant, index) => (
                    <View key={index + participant._id} style={styles.participant}>

                        <AvatarUser user={participant} />

                        <View style={styles.info}>

                            <Text style={styles.identity}>
                                {
                                    participant.firstname || participant.lastname ?
                                        `${participant.firstname || ""} ${participant.lastname || ""}` :
                                        "..."
                                }
                            </Text>

                            <Text style={styles.email}>{participant.email}</Text>


                        </View>

                        {participant._id !== user._id && (
                            <View style={styles.ban} >
                                <Button textColor='#333' icon="delete" onPress={() => banFromGroup(participant)} />
                            </View>
                        )}
                    </View>
                ))}
            </View>

        </View>
    )
}
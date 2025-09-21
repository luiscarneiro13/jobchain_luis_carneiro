import { View, Text } from 'react-native'
import { styles } from "./UserInfo.styles"
import { Avatar } from 'react-native-paper'
import { ENV } from "../../../utils"
import { AvatarUser } from '../../Shared/AvatarUser'


export function UserInfo(props) {
    const { user } = props
    return (
        <View style={styles.content}>
            
            <AvatarUser user={user} />

            {user.firstname || user.lastname ? (
                <Text style={styles.identity}>
                    {`${user.firstname || ""} ${user.lastname || ""}`}
                </Text>
            ) : null}

            <Text style={styles.email}>{user.email}</Text>
        </View>
    )
}
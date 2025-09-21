import { View, Text, StyleSheet } from 'react-native'
import { ENV } from '../../utils'
import { Avatar } from 'react-native-paper'

export function AvatarUser({ user, header = null }) {

    return (
        <>
            {
                user.avatar ? (
                    <Avatar.Image
                        style={styles.avatar}
                        source={{ uri: user.avatar ? `${ENV.BASE_PATH}/${user.avatar}` : null }}
                        size={header ? 30 : 60}
                    />
                ) : (
                    <Avatar.Text
                        label={user.email.substring(0, 2).toUpperCase()}
                        style={styles.avatar}
                        size={header ? 30 : 60}
                    />
                )
            }
        </>
    )
}

const styles = new StyleSheet.create({
    avatar: {
        backgroundColor: "#e3ffeb",
        marginRight:10
    },
})
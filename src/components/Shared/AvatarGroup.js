import { View, Text, StyleSheet } from 'react-native'
import { ENV } from '../../utils'
import { Avatar } from 'react-native-paper'

export function AvatarGroup({ uri, header = null, size = null }) {

    if (header) {
        size = header
    } else if (size) {
        size = size
    } else {
        size = 30
    }


    return (
        <>
            {
                uri ? (
                    <Avatar.Image
                        style={styles.avatar}
                        source={{ uri }}
                        size={size}
                    />
                ) : (
                    <Avatar.Icon size={size} icon="camera" color="#FFF" />
                )
            }
        </>
    )
}

const styles = new StyleSheet.create({
    avatar: {
        backgroundColor: "#e3ffeb",
        marginRight: 10
    },
})
import { View } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { IconButton } from 'react-native-paper';

export function IconBack() {
    const navigation = useNavigation()
    return (
        <View>
            <IconButton
                icon="chevron-left"
                iconColor="#333"
                size={35}
                onPress={navigation.goBack}
                style={{ marginLeft: -10 }}
            />
        </View>
    )
}
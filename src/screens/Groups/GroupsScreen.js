import { Text, View } from 'react-native'
import { useTheme } from 'react-native-paper'

export function GroupsScreen() {

  const theme = useTheme()

  return (
    <View style={theme.content}>
      <Text>Groups Screen</Text>
    </View>
  )
}
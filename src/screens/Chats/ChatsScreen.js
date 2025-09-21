import { View, Text } from 'react-native'
import { useTheme } from "react-native-paper"

export function ChatsScreen() {

  const theme = useTheme()

  return (
    <View style={theme.content}>
      <Text>Chats Screen</Text>
    </View>
  )
}
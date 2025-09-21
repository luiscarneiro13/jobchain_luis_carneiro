import { View, Text } from 'react-native'
import { useTheme } from "react-native-paper"

export function CreateChatScreen() {

  const theme = useTheme()

  return (
    <View style={theme.content}>
      <Text>Create chat screen</Text>
    </View>
  )
}
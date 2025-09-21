import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ChatsScreen, CreateChatScreen } from "../../screens/Chats"
import { screens } from "../../utils"
import { styles } from "../Styles.styles"
import { Platform } from "react-native"
import { IconBack } from "../../components/Navigation"

const Stack = createNativeStackNavigator()

export function ChatsNavigation() {
    return (
        <Stack.Navigator screenOptions={{ ...styles.stackNavigationStyles }}>
            <Stack.Screen name={screens.tab.chats.chatsScreen} component={ChatsScreen} options={{ title: "Chats" }} />
            {/* <Stack.Screen
                name={screens.tab.chats.createChatScreen}
                component={CreateChatScreen}
                options={{ title: "Nuevo chat", headerLeft: () => <IconBack />, headerLeftContainerStyle: { marginLeft: 0 } }}
            /> */}
        </Stack.Navigator>
    )
}
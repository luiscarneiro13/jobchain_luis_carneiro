import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { BottomTabNavigation } from "./BottomTabNavigation"
import { UserProfileScreen, CameraScreen, ImageFullScreen } from "../screens/Global"
import { styles } from "./Styles.styles"
import { ChatScreen } from "../screens/Chats"
import { GroupScreen, GroupProfileScreen, AddUserGroupScreen, ChangeNameGroupScreen } from "../screens/Groups"
import { StyleSheet } from "react-native"
import { screens } from "../utils"

const Stack = createNativeStackNavigator()

export function AppNavigation() {
    return (
        <Stack.Navigator>

            <Stack.Screen name={screens.tab.root} component={BottomTabNavigation} options={{ headerShown: false }} />

            {/* <Stack.Group screenOptions={options}>
                <Stack.Screen name={screens.global.chatScreen} component={ChatScreen} />
                <Stack.Screen name={screens.global.groupScreen} component={GroupScreen} />
            </Stack.Group>

            <Stack.Group screenOptions={optionsModal}>
                <Stack.Screen name={screens.global.userProfileScreen} component={UserProfileScreen} options={{ title: "Info. del usuario" }} />
                <Stack.Screen name={screens.global.groupProfileScreen} component={GroupProfileScreen} options={{ title: "Info. del grupo" }} />
                <Stack.Screen name={screens.global.addUserGroupScreen} component={AddUserGroupScreen} options={{ title: "Añadir participante" }} />
                <Stack.Screen name={screens.global.changeNameGroupScreen} component={ChangeNameGroupScreen} options={{ title: "Cambiar nombre del grupo" }} />
                <Stack.Screen name={screens.global.cameraScreen} component={CameraScreen} options={{ headerShown: false }} />
                <Stack.Screen name={screens.global.imageFullScreen} component={ImageFullScreen} options={{ headerShown: false }} />
            </Stack.Group> */}

        </Stack.Navigator>
    )
}

const options = { headerShown: false, ...styles.stackNavigationStyles }
const optionsModal = { presentation: "modal", ...styles.modalStyles }
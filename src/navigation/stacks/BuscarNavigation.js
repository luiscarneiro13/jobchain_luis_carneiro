import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { BuscarScreen } from "../../screens/Buscar"
import { screens } from "../../utils"
import { styles } from "../Styles.styles"

const Stack = createNativeStackNavigator()

export function BuscarNavigation() {
    return (
        <Stack.Navigator screenOptions={{ ...styles.stackNavigationStyles }}>
            <Stack.Screen name={screens.tab.buscar.root} component={BuscarScreen} options={{ title: "Buscar" }} />
            {/* <Stack.Screen
                name={screens.tab.chats.createChatScreen}
                component={CreateChatScreen}
                options={{ title: "Nuevo chat", headerLeft: () => <IconBack />, headerLeftContainerStyle: { marginLeft: 0 } }}
            /> */}
        </Stack.Navigator>
    )
}
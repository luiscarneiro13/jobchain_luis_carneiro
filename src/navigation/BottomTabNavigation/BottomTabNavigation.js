import { View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ChatsNavigation, GroupsNavigation, SettingsNavigation } from "../stacks"
import { screens } from "../../utils"
import { styles } from "./BottomTabNavigation.styles"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()

export function BottomTabNavigation() {
    return (
        <Tab.Navigator screenOptions={screenOptionsConfig}>
            <Tab.Screen name={screens.tab.chats.root} component={ChatsNavigation} options={{ title: "Chats" }} />
            <Tab.Screen name={screens.tab.groups.root} component={GroupsNavigation} options={{ title: "Grupos" }} />
            {/* <Tab.Screen name={screens.tab.settings.root} component={SettingsNavigation} options={{ title: "Ajustes" }} /> */}
        </Tab.Navigator>
    )
}

const screenOptionsConfig = ({ route }) => ({
    headerShown: false,
    tabBarStyle: styles.tabBarStyle,
    tabBarLabelStyle: styles.tabBarLabelStyle,
    tabBarIcon: ({ focused, color, size }) => screenIcon(route, focused ? "#0a5a22" : "#888", size, focused)
})

function screenIcon(route, color, size, focused) {
    let iconName

    if (route.name === screens.tab.chats.root) {
        iconName = "home"
    }

    if (route.name === screens.tab.groups.root) {
        iconName = "account-group"
    }

    if (route.name === screens.tab.settings.root) {
        iconName = "cog-outline"
    }

    return (
        <View style={focused ? styles.circleBackground : null}>
            <Icon name={iconName} color={color} size={size} />
        </View>
    )
}
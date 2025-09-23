import React from 'react';
import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ChatsNavigation, GroupsNavigation, BuscarNavigation } from '../stacks';
import { screens } from '../../utils';
import { styles } from './BottomTabNavigation.styles';

// Componente simple que no renderiza nada para las pestañas sin funcionalidad.
const NullScreen = () => <View />;

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={screenOptionsConfig}
      sceneContainerStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name={screens.tab.inicio.root}
        component={ChatsNavigation}
        options={{ title: 'Inicio' }}
      />
      {/* <Tab.Screen
        name={screens.tab.billetera.root}
        component={GroupsNavigation}
        options={{ title: 'Historia' }}
      />
      <Tab.Screen
        name={screens.tab.buscar.root}
        component={BuscarNavigation}
        options={{ title: 'Buscar' }}
      />
      <Tab.Screen
        name={screens.tab.notificaciones.root}
        component={NullScreen}
        options={{ title: 'Notificaciones' }}
      />
      <Tab.Screen
        name={screens.tab.mensajes.root}
        component={NullScreen}
        options={{ title: 'Mensajes' }}
      /> */}
    </Tab.Navigator>
  );
}

const screenOptionsConfig = ({ route }) => ({
  headerShown: false,
  tabBarStyle: styles.tabBarStyle,
  tabBarLabelStyle: styles.tabBarLabelStyle,
  tabBarItemStyle: styles.tabBarItemStyle,
  tabBarIcon: ({ focused, color, size }) =>
    screenIcon(route, focused ? '#615bf1' : '#88a', size, focused),
});

function screenIcon(route, color, size, focused) {
  let iconName;

  switch (route.name) {
    case screens.tab.inicio.root:
      iconName = 'home';
      break;
    case screens.tab.billetera.root:
      iconName = 'account-group';
      break;
    case screens.tab.buscar.root:
      iconName = 'magnify';
      break;
    case screens.tab.notificaciones.root:
      iconName = 'bell';
      break;
    case screens.tab.mensajes.root:
      iconName = 'message-text';
      break;
    default:
      iconName = 'help-circle-outline';
  }

  return (
    <View style={[styles.iconWrapper, focused && styles.activeIconWrapper]}>
      <Icon name={iconName} color={color} size={24} />
    </View>
  );
}
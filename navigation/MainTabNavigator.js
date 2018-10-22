import React from 'react';
import { Platform } from 'react-native';
// import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
// import ThreeDrawer from './three-drawer';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';


// import { Button, Text, Platform, ScrollView, StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import FirstScreen from '../screens/first-screen';
import SecondScreen from '../screens/second-screen';
import ThreeSample from '../screens/three-sample';
import ArkitSample from '../screens/arkit-sample';

const ThreeDrawer = createDrawerNavigator(
    {
	First: {
	    path: '/',
	    screen: FirstScreen,
	},
	Second: {
	    path: '/sent',
	    screen: SecondScreen,
	},
	Third: {
	    path: '/three',
	    screen: ThreeSample,
	},
	Fourth: {
	    path: '/arkit',
	    screen: ArkitSample,
	},
    },
    {
	initialRouteName: 'First',
	drawerPosition: 'left',
	contentOptions: {
	    activeTintColor: 'red',
	},
    }
);
export default ThreeDrawer;

// const HomeStack = createStackNavigator({
//   Home: ThreeDrawer,
// });

// const LinksStack = createStackNavigator({
//   Links: LinksScreen,
// });

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
//     />
//   ),
// };

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
//     />
//   ),
// };

// export default createBottomTabNavigator({
//   HomeStack,
//   LinksStack,
//   SettingsStack,
// });

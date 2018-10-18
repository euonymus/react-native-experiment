import React from 'react';
import { Platform } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

// import { Button, Text, Platform, ScrollView, StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import FirstScreen from '../screens/first-screen';
import SecondScreen from '../screens/second-screen';
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

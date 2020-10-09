import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import {
    HomeScreen,
    InterestScreen,
    ProfileScreen
} from '../../pages'

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
                    </View>
                ),
            }
        },
        Interest: {
            screen: InterestScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'heart'} />
                    </View>
                ),
                activeColor: '#333333',
                inactiveColor: '#CCCCCC',
                barStyle: { backgroundColor: '#FFFFFF' },
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'ios-person'} />
                    </View>
                ),
                activeColor: '#333333',
                inactiveColor: '#CCCCCC',
                barStyle: { backgroundColor: '#FFFFFF' },
            }
        },
    },
    {
        initialRouteName: 'Home',
        activeColor: '#333333',
        inactiveColor: '#CCCCCC',
        barStyle: { backgroundColor: '#FFFFFF' },
    }
);

export default createAppContainer(TabNavigator);

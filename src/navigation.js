import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeStack = createBottomTabNavigator();
const HomeNav = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" />
    </HomeStack.Navigator>
)

const RootStack = createStackNavigator();
const RootNav = () => (
    <RootStack.Navigator>
        <RootStack.Screen name="HomeStack" component={HomeNav} />
    </RootStack.Navigator>
)

export default class AppNavigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <RootNav />
            </NavigationContainer>
        )
    }
}
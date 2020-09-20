import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './Splash';
import JobListScreen from './List';
import ShortlistScreen from './Shortlist';
import AppliedScreen from './Applied';
import Profile from './Profile';
import JobDetailScreen from './Detail';

const HomeStack = createBottomTabNavigator();
const HomeNav = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={JobListScreen} />
        <HomeStack.Screen name="Shortlisted" component={ShortlistScreen} />
        <HomeStack.Screen name="Applied" component={AppliedScreen} />
        <HomeStack.Screen name="Profile" component={Profile} />
    </HomeStack.Navigator>
)

const RootStack = createStackNavigator();
const RootNav = () => (
    <RootStack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false, cardStyle: {backgroundColor: 'white'}}}
    >
        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen name="HomeStack" component={HomeNav} />
        <RootStack.Screen name="Detail" component={JobDetailScreen} />
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

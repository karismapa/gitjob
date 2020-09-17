import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './screens/splash';
import JobListScreen from './screens/list';
import ShortlistScreen from './screens/shortlist';
import AppliedScreen from './screens/applied';
import ProfileScreen from './screens/profile';
import AuthScreen from './screens/auth';
import JobDetailScreen from './screens/detail';

const HomeStack = createBottomTabNavigator();
const HomeNav = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={JobListScreen} />
        <HomeStack.Screen name="Shortlisted" component={ShortlistScreen} />
        <HomeStack.Screen name="Applied" component={AppliedScreen} />
        <HomeStack.Screen name="Profile" component={AuthScreen} />
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
        <RootStack.Screen name="Auth" component={AuthScreen} />
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

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import SplashScreen from './Splash';
import JobListScreen from './List';
import ShortlistScreen from './Shortlist';
import AppliedScreen from './Applied';
import Profile from './Profile';
import JobDetailScreen from './Detail';

const AppNavigator = () => {
    // const { isLoggedIn } = useSelector(state => state)

    const HomeStack = createBottomTabNavigator();
    const HomeNav = () => (
        <HomeStack.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
    
                    if (route.name === "Home") {
                        iconName = "home-filled"
                    } else if (route.name === "Shortlisted") {
                        iconName = 'view-list'
                    } else if (route.name === "Applied") {
                        iconName = 'check-circle'
                    } else if (route.name === "Profile") {
                        // iconName = isLoggedIn ? 'person' : 'lock'
                        iconName = 'person'
                    }
    
                    return <Icon name={iconName} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                activeTintColor: 'black',
            }}
        >
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
    
    // render() {
        return (
            <NavigationContainer>
                <RootNav />
            </NavigationContainer>
        )
    // }
}

export default AppNavigator

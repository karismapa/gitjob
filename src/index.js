import React from 'react';
import { View } from 'react-native';
import AppNavigator from './navigation';

export default class AppController extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <AppNavigator />
            </View>
        )
    }
}

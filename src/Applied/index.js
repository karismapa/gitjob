import React from 'react';
import { View, Text } from 'react-native';
import styles from '../_assets/style/style';
import Header from '../_components/header';

const AppliedScreen = () => {
    return (
        <View style={{flex: 1}}>
            <Header />
            <View style={styles.center}>
                <Text>Your applied list,</Text>
                <Text>coming soon.</Text>
            </View>
        </View>
    )
}

export default AppliedScreen

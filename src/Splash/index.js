import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("HomeStack")
        }, 500)
    }, [])

    return (
        <LinearGradient colors={['#222222', '#000000', '#222222']} style={styles.container}>
            <Image source={require('../_assets/images/logo-splash-white.png')} style={styles.logo} />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    logo: {
        height: 125,
        width: 125,
        resizeMode: 'contain',
    }
})

export default SplashScreen

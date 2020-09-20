import React, { useEffect } from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../_assets/style/style';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("HomeStack")
        }, 1500)
    }, [])

    return (
        <LinearGradient
            colors={[
                '#222222',
                '#000000',
                '#222222',
            ]}
            style={{
                ...styles.center,
                backgroundColor: '#000000',
            }}
        >
            <Image
                source={require('../_assets/images/logo-splash-white.png')}
                style={{
                    height: 125,
                    width: 125,
                    resizeMode: 'contain',
                }}
            />
        </LinearGradient>
    )
}

export default SplashScreen

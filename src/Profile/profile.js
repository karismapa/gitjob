import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import cmnStyles from '../_assets/style/style';

const ProfileScreen = () => {
    const email = useSelector(state => state)

    return (
        <View style={cmnStyles.container}>
            <Image
                source={require('../_assets/images/job-picture.png')}
                style={styles.logo}
            />
            <Text>Hello,</Text>
            <Text style={{fontSize: 12, marginBottom: 20}}>karisma.mulyono@gmail.com</Text>
            
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}
            >
                <TouchableOpacity
                    style={{
                        height: 120,
                        width: '40%',
                        ...styles.button,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: 'white',
                        }}
                    >you have 0 saved jobs</Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: 'white',
                        }}
                    >go to saved job</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: 120,
                        width: '40%',
                        ...styles.button,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: 'white',
                        }}
                    >Check your application!</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{
                    height: 50,
                    width: '85%',
                    ...styles.button,
                }}
            >
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: 'white',
                    }}
                >Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 80,
        width: 80,
        resizeMode: 'contain',
        borderRadius: 25,
        overflow: 'hidden',
        margin: 5,
        marginBottom: 20,
    },
    button: {
        marginHorizontal: 10,
        marginVertical: 30,
        padding: 10,
        backgroundColor: '#8F8F8F',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
    },
})

export default ProfileScreen

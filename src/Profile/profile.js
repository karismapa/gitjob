import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { action } from '../_redux/authRedux';
import Header from '../_components/header';
import cmStyles from '../_assets/style/style';

const ProfileScreen = () => {
    const { email } = useSelector(state => state.email)

    const dispatch = useDispatch()
    const logout = useCallback(() => {
        dispatch(action.logout({}), [dispatch])
    })

    return (
        <View>
            <Header />
            <View style={{alignItems: 'center'}}>
                <LinearGradient
                    colors={['#000000', '#333333']}
                    style={styles.header}
                >
                    <Image
                        source={{uri: `https://api.adorable.io/avatars/285/abott@adorable.png`}}
                        style={styles.logo}
                    />
                    <Text style={{fontSize: 20, fontWeight: '800'}}>{email ? email : `Unknown User`}</Text>
                </LinearGradient>

                <View style={{width: '100%', marginTop: 110}}>
                    <View style={styles.menuArea}>
                        <TouchableOpacity style={styles.menuTouch}>
                            <Text style={{marginLeft: 10}}>Skill</Text>
                            <Icon name="navigate-next" size={20} style={{paddingHorizontal: 10}} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuArea}>
                        <TouchableOpacity style={styles.menuTouch}>
                            <Text style={{marginLeft: 10}}>Experience</Text>
                            <Icon name="navigate-next" size={20} style={{paddingHorizontal: 10}} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuArea}>
                        <TouchableOpacity style={styles.menuTouch}>
                            <Text style={{marginLeft: 10}}>Curriculum Vitae</Text>
                            <Icon name="navigate-next" size={20} style={{paddingHorizontal: 10}} />
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.bigButtonArea}>
                    <TouchableOpacity style={styles.bigButton}>
                        <LinearGradient colors={['#333333', '#000000']} style={styles.bigButtonGradient}>
                            <Text style={{fontSize: 12, fontWeight: '100', color: 'white'}}>You have</Text>
                            <Text style={{fontSize: 50, fontWeight: 'bold', color: 'white'}}>0</Text>
                            <Text style={{fontSize: 12, fontWeight: '100', color: 'white'}}>saved job</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bigButton}>
                        <LinearGradient colors={['#333333', '#000000']} style={styles.bigButtonGradient}>
                            <Text style={{fontSize: 12, fontWeight: '100', color: 'white'}}>You have</Text>
                            <Text style={{fontSize: 50, fontWeight: 'bold', color: 'white'}}>0</Text>
                            <Text style={{fontSize: 12, fontWeight: '100', color: 'white'}}>active application</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{width: '100%', alignItems: 'center', marginTop: 25}}>
                    <TouchableOpacity
                        style={{...cmStyles.button, width: '87%'}}
                        onPress={() => logout()}
                    >
                        <Text style={cmStyles.buttonText}>LOGOUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000000',
        height: 80,
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
    },
    logo: {
        height: 80,
        width: 80,
        borderRadius: 25,
        overflow: 'hidden',
        margin: 5,
        marginTop: 40,
        marginBottom: 15,
    },
    button: {
        padding: 10,
        backgroundColor: '#000000',
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
    },
    menuArea: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        marginHorizontal: 30,
        borderRadius: 10,
        marginVertical: 2,
    },
    menuTouch: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bigButtonArea: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
    },
    bigButton: {
        ...cmStyles.button,
        height: 120,
        width: '40%',
    },
    bigButtonGradient: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 5,
    },
})

export default ProfileScreen

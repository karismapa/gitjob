import React, { useCallback, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import cmStyles from '../_assets/style/style';
import Header from '../_components/header';
import { action } from '../_redux/authRedux';

const AuthScreen = () => {
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
    const login = useCallback(() => {
        dispatch(action.login({ email: email }), [dispatch])
    })
    
    return (
        <View style={{flex: 1}}>
            <Header />
            <View style={{...cmStyles.center, padding: 25}}>
                <Image
                    source={require('../_assets/images/logo-circle.png')}
                    style={{
                        height: 100,
                        width: 100,
                        resizeMode: 'contain',
                        marginBottom: 30,
                    }}
                />
                <View style={{width: '100%', alignItems: 'center'}}>
                    <Text style={{fontSize: 12}}>You're not logged in yet</Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.formArea}>
                        <Text style={styles.formTitle}>Email</Text>
                        <TextInput
                            style={styles.formInput}
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.formArea}>
                        <Text style={styles.formTitle}>Password</Text>
                        <TextInput
                            style={styles.formInput}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={{...cmStyles.button, margin: 10}}
                    onPress={() => login()}
                >
                    <Text style={cmStyles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#000000',
        width: '100%',
        paddingVertical: 20,
        marginVertical: 25,
    },
    formArea: {
        width: '90%',
        marginHorizontal: '5%',
        paddingVertical: 10,
    },
    formTitle: {
        fontSize: 12,
        paddingBottom: 5,
    },
    formInput: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 16,
        paddingHorizontal: 10,
    },
})

export default AuthScreen

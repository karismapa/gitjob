import React, { useCallback, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from '../_assets/style/style';
import { action } from '../_redux/authRedux';

const AuthScreen = () => {
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()

    const login = useCallback(() => {
        dispatch(action.login({ email: 'karisma.mulyono@gmail.com' }), [dispatch])
    })
    
    return (
        <View style={{padding: 25, ...styles.container}}>
            <View style={{width: '100%'}}>
                <Text>Login</Text>
            </View>
            <View
                style={{
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#000000',
                    width: '100%',
                    paddingVertical: 30,
                }}
            >
                <View
                    style={{
                        width: '90%',
                        marginHorizontal: '5%',
                        paddingVertical: 10,
                    }}
                >
                    <Text>Email</Text>
                    <TextInput
                        style={{
                            height: 40,
                            width: '100%',
                            borderWidth: 1,
                            borderColor: '#000000',
                            borderRadius: 5,
                            paddingHorizontal: 10,
                        }}
                    />
                </View>
                <View
                    style={{
                        width: '90%',
                        marginHorizontal: '5%',
                        paddingVertical: 10,
                    }}
                >
                    <Text>Password</Text>
                    <TextInput
                        style={{
                            height: 40,
                            width: '100%',
                            borderWidth: 1,
                            borderColor: '#000000',
                            borderRadius: 5,
                            paddingHorizontal: 10,
                        }}
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <TouchableOpacity
                style={{
                    margin: 10,
                    padding: 10,
                    backgroundColor: 'black',
                    width: '100%',
                    alignItems: 'center',
                    borderRadius: 20,
                    height: 70,
                    justifyContent: 'center',
                    marginTop: 40,
                }}
                onPress={() => login()}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white',
                    }}
                >LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AuthScreen

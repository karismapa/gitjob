import React from 'react';
import ProfileScreen from './profile';
import AuthScreen from '../Auth';
import { useSelector } from 'react-redux';

const Profile = () => {
    const { isLoggedIn } = useSelector(state => state)

    return (
        <>
            { isLoggedIn ? <ProfileScreen /> : <AuthScreen /> }
        </>
    )
}

export default Profile

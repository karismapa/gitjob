import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={{height: 40, backgroundColor: '#000000', alignItems: 'flex-end'}}>
            <Text style={{color: '#FFFFFF', paddingTop: 5, paddingRight: 15, fontSize: 25, fontWeight: 'bold'}}>GitJob</Text>
        </View>
    )
}

export default Header

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const JobComponent = (props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate("Detail", {id: props.job.id})}
        >
            <Image
                source={{uri: props.job.company_logo}}
                defaultSource={require('../assets/images/job-picture.png')}
                style={styles.logo}
            />
            <View style={styles.textArea}>
                <Text style={styles.jobTitle}>{props.job.title}</Text>
                <Text style={styles.company}>at {props.job.company}</Text>
                <Text style={styles.location}>location: {props.job.location}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#C4C4C4',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
        padding: 13,
    },
    logo: {
        height: 80,
        width: 80,
        resizeMode: 'contain',
        borderRadius: 25,
        overflow: 'hidden',
        margin: 5,
    },
    textArea: {
        paddingLeft: 13,
    },
    jobTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    company: {
        fontSize: 14,
    },
    location: {
        fontSize: 12,
        color: '#444444',
    }
})

export default JobComponent

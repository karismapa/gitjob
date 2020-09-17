import React, { useCallback } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import jobs from '../assets/data/jobs.json';

const ButtonToURL = ({ url }) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url)

        if (supported) {
            await Linking.openURL(url)
        } else {
            Alert.alert(`Cannot open job URL: ${url}`)
        }
    }, [url])

    return (
        <TouchableOpacity
            style={{
                margin: 10,
                padding: 10,
                backgroundColor: 'black',
                width: 80,
                alignItems: 'center',
                borderRadius: 10,
                height: 50,
                justifyContent: 'center',
            }}
            onPress={handlePress}
        >
            <Text
                style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: 'white',
                }}
            >Apply</Text>
        </TouchableOpacity>
    )
}

const JobDetailScreen = ({ route }) => {
    const { id } = route.params
    const job = jobs.find(job => job.id === id)

    return (
        <View style={{flex: 1}}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.headerTitle}>
                        <Image
                            source={{uri: job.company_logo}}
                            defaultSource={require('../assets/images/job-picture.png')}
                            style={styles.logo}
                        />
                        <View style={{paddingLeft: 2}}>
                            <Text style={{fontSize: 16}}>{job.company}</Text>
                            <Text style={{fontSize: 13, color: '#C4C4C4',}}>{job.company_url}</Text>
                            <Text style={{fontSize: 13, color: '#C4C4C4',}}>{job.location}</Text>
                        </View>
                    </View>
                    <View style={styles.jobTitle}>
                        <Text style={{fontSize: 18}}>{job.type} </Text>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{job.title}</Text>
                    </View>
                    <View style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1, marginHorizontal: 20}} />
                </View>
            </View>

            <ScrollView style={styles.content}>
                <Text>posted at {job.created_at}</Text>

                <Text style={{fontWeight: 'bold'}}>{'\n'}Description</Text>
                <Text>{job.description}</Text>

                <Text style={{fontWeight: 'bold'}}>{'\n'}How to apply?</Text>
                <Text>{job.how_to_apply}</Text>

                <View style={{height: 120, alignItems: 'flex-end', justifyContent: 'center'}}>
                    <ButtonToURL url={job.url} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000000',
        marginBottom: 15,
    },
    headerContent: {
        backgroundColor: 'white',
        marginTop: 35,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    jobTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15,
    },
    logo: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        borderRadius: 50,
        overflow: 'hidden',
        margin: 5,
    },
    content: {
        padding: 10,
        marginHorizontal: 20,
        marginBottom: 5,
        borderRadius: 20,
        borderColor: '#DFDFDF',
        borderWidth: 1,
    },
})

export default JobDetailScreen

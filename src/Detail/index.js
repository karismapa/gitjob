import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import Axios from 'axios';
import cmStyles from '../_assets/style/style';

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
            style={{...cmStyles.button, margin: 10, width: 125}}
            onPress={handlePress}
        >
            <Text style={cmStyles.buttonText}>APPLY</Text>
        </TouchableOpacity>
    )
}

const JobDetailScreen = ({ route }) => {
    const { id } = route.params

    const [isLoading, setLoading] = useState(true)
    const [jobDetail, setJobDetail] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const response = await Axios.get(`https://jobs.github.com/positions/${id}.json?markdown=true`)
                setJobDetail(response.data)
            } catch(err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    return (
        <View style={{flex: 1}}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.headerTitle}>
                        <Image
                            source={{uri: jobDetail.company_logo}}
                            defaultSource={require('../_assets/images/job-picture.png')}
                            style={styles.logo}
                        />
                        <View style={{paddingLeft: 2}}>
                            <Text style={{fontSize: 16}}>{jobDetail.company}</Text>
                            <Text style={{fontSize: 13, color: '#C4C4C4',}}>{jobDetail.company_url}</Text>
                            <Text style={{fontSize: 13, color: '#C4C4C4',}}>{jobDetail.location}</Text>
                        </View>
                    </View>
                    <View style={styles.jobTitle}>
                        <Text style={{fontSize: 18}}>{jobDetail.type} </Text>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{jobDetail.title}</Text>
                    </View>
                    <View style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1, marginHorizontal: 20}} />
                </View>
            </View>

            {isLoading ? <ActivityIndicator /> : (
                <ScrollView style={styles.content}>
                    <Text>posted at {jobDetail.created_at}</Text>

                    <Text style={{fontWeight: 'bold'}}>{'\n'}Description</Text>
                    <Text>{jobDetail.description}</Text>

                    <Text style={{fontWeight: 'bold'}}>{'\n'}How to apply?</Text>
                    <Text>{jobDetail.how_to_apply}</Text>

                    <View style={{height: 120, alignItems: 'flex-end', justifyContent: 'center'}}>
                        <ButtonToURL url={jobDetail.url} />
                    </View>
                </ScrollView>
            )}
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

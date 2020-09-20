import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Axios from 'axios';
import { useSelector } from 'react-redux';

import Header from '../_components/header';
import JobComponent from './job';

const JobListScreen = () => {
    const [isLoading, setLoading] = useState(true)
    const [jobs, setJobs] = useState({})
    const [text, setText] = useState("")
    const [searchKey, setSearchKey] = useState("")

    const { email } = useSelector(state => state.email)

    useEffect(() => {
        (async () => {
            try {
                const response = await Axios.get(`https://jobs.github.com/positions.json`, {params: {description: searchKey}})
                setJobs(response.data)
            } catch(err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        })()
    }, [searchKey])

    const renderItem = ({ item }) => (
        <JobComponent job={item} />
    )
    
    return (
        <View>
            <Header />
            <LinearGradient colors={['#000000', '#333333']} style={styles.header}>
                <Text style={{color: '#FFFFFF'}}>{email ? `Hi, ${email}` : `Hello`}</Text>
                <Text style={styles.greetings}>Find your best suited job here</Text>
                <View style={styles.searchBar}>
                    <Icon name="search" size={20} style={{paddingHorizontal: 10}} />
                    <TextInput
                        style={{flex: 1}}
                        value={text}
                        placeholder={'keyword'}
                        onChangeText={text => setText(text)}
                        onBlur={() =>{
                            setLoading(false)
                            setSearchKey(text)
                        }}
                    />
                </View>
            </LinearGradient>
            
            {isLoading ? <ActivityIndicator /> : (
                <View style={{padding: 5, marginBottom: 200}}>
                    <FlatList
                        data={jobs}
                        renderItem={renderItem}
                        keyExtractor={job => job.id}
                        bounces={true}
                    />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        backgroundColor: '#000',
        paddingLeft: '2%',
        justifyContent: 'flex-end',
    },
    greetings: {
        color: '#FFF',
        paddingBottom: 10,
        fontSize: 12,
    },
    searchBar: {
        backgroundColor: '#FFF',
        width: '98%',
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
})

export default JobListScreen

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Axios from 'axios';

import JobComponent from '../components/job';


const JobListScreen = () => {
    const [isLoading, setLoading] = useState(true)
    const [jobs, setJobs] = useState({})
    const [text, setText] = useState("")
    const [searchKey, setSearchKey] = useState("")

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
            <View style={{height: 40, backgroundColor: '#000000', alignItems: 'flex-end'}}>
                <Text style={{color: '#FFFFFF', paddingTop: 5, paddingRight: 15, fontSize: 25, fontWeight: 'bold'}}>GitJob</Text>
            </View>
            <LinearGradient colors={['#000000', '#333333']} style={{height: 80, backgroundColor: '#000000', justifyContent: 'center'}}>
                <View style={{backgroundColor: '#FFF', width: '60%', height: 40, borderRadius: 10, marginLeft: 20, flexDirection: 'row', alignItems: 'center'}}>
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

export default JobListScreen

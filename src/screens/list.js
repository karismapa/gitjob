import React from 'react';
import { FlatList, View } from 'react-native';
import JobComponent from '../components/job';

import jobs from '../assets/data/jobs.json';
import LinearGradient from 'react-native-linear-gradient';

const JobListScreen = () => {
    const renderItem = ({ item }) => (
        <JobComponent job={item} />
    )
    
    return (
        <View>
            <View style={{height: 40, backgroundColor: '#000000'}}></View>
            <LinearGradient colors={['#000000', '#333333']} style={{height: 60, backgroundColor: '#000000'}}>

            </LinearGradient>
            
            <View style={{padding: 5}}>
                <FlatList
                    data={jobs}
                    renderItem={renderItem}
                    keyExtractor={job => job.id}
                    bounces={true}
                />
            </View>
        </View>
    )
}

export default JobListScreen

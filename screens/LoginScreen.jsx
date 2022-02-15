import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Login } from '../components'
import Body from '../modules/Layout/Body';
import { fetchUserLocation } from '../modules/Hooks/fetchUserLocation';
import { useIsFocused } from '@react-navigation/core';

const LoginScreen = ({ navigation }) => {
    
    const [ data, setData ] = useState({
        location: null,
        loading: true
    });

    const getUserLocation = async() => {
        const data = await fetchUserLocation();
        setData({ location: data.data, loading: false })
    };
    
    useEffect(() => {
        getUserLocation()
    }, [ useIsFocused() ]);

    return (
        <Body>
            <View style={styles.statusBar}>
            <StatusBar style="dark" />
            </View>
            <Login navigation={navigation} data={data} />
        </Body>
    )
}
export default LoginScreen;


const styles = StyleSheet.create({
    statusBar: {
      backgroundColor: '#000000'
    },
   
});
  

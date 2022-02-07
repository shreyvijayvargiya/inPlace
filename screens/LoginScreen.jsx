import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Login } from '../components'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.statusBar}>
            <StatusBar style="dark" />
            </View>
            <Login />
        </View>
    )
}
export default LoginScreen;


const styles = StyleSheet.create({
    statusBar: {
      backgroundColor: '#000000'
    },
   
});
  

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Login } from '../components'
import Body from '../modules/Layout/Body';

const LoginScreen = () => {
    return (
        <Body>
            <View style={styles.statusBar}>
            <StatusBar style="dark" />
            </View>
            <Login />
        </Body>
    )
}
export default LoginScreen;


const styles = StyleSheet.create({
    statusBar: {
      backgroundColor: '#000000'
    },
   
});
  

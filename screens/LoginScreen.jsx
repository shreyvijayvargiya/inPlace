import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Login } from '../components'
import Body from '../modules/Layout/Body';

const LoginScreen = ({ navigation }) => {
    return (
        <Body>
            <View style={styles.statusBar}>
            <StatusBar style="dark" />
            </View>
            <Login navigation={navigation} />
        </Body>
    )
}
export default LoginScreen;


const styles = StyleSheet.create({
    statusBar: {
      backgroundColor: '#000000'
    },
   
});
  

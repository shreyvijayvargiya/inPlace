import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image } from 'react-native';
import { useTheme } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Paragraph, Message } from '../../modules/UI/Text';
import app from '../../modules/Firebase/firebase';
import { loginApi } from '../../modules/Api/login'
import { fetchUserLocation } from '../../modules/Hooks/fetchUserLocation';

const Login = ({ navigation }) => {

    const [ data, setData ] = useState({
        location: null,
        loading: true
    });

    const getUserLocation = async() => {
        const { location, error, loading } = await fetchUserLocation();
        setData({ loading: false, location })
    };
    useEffect(() => {
        getUserLocation()
    }, [ ]);
    
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/loginPageBackground.png')} style={styles.bgImg} />
            <View style={styles.loginContainer}>
                <Image source={require('../../assets/inPlaceLogo.png')} />
                <Paragraph data="See where the world is travelling" />
                <Message data={
                    `Leave the mainstream behind and explore the places that your friends, influencers and travellers are exploring`
                } />
                <Button  
                    title="Guest Login To Continue"
                    containerStyle={styles.loginButton}
                    titleStyle={{ color: 'black' }}
                    onPress={() => loginApi(navigation, data.location )}
                />
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignItems: 'center',
        height: Dimensions.get("window").height
    },
    statusBar: {
      borderBottomWidth: 1,
      borderBottomColor: '#666666',
      padding: 18
    },  
    bgImg: {
      flex: 1,
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height
    },
    loginContainer: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height * 0.6,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#000000',
        padding: 40,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    loginButton: {
        width: Dimensions.get("window").width * 0.8,
        marginVertical: 40,
        padding: 8,
        borderRadius: 8,
        backgroundColor: 'white',
    }
});
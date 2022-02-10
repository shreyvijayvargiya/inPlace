import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import Body from '../../modules/Layout/Body';
import { Icon } from 'react-native-elements';

const Locations = ({ navigation }) => {
    
    const [ region, setRegion ] = useState({
        latitude: 20.5937,
        longitude: 78.9629,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
    });

    const openCameraScreen = () => {
        navigation?.navigate('Camera')
    };


    return (
        <Body>
            <MapView
                initialRegion={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                    latitudeDelta: region.latitudeDelta,
                    longitudeDelta: region.longitudeDelta
                }}
                maxZoomLevel={20}
                minZoomLevel={5}
                region={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                    latitudeDelta: region.latitudeDelta,
                    longitudeDelta: region.longitudeDelta
                }}
                userInterfaceStyle="dark"
                style={styles.map}
                showsUserLocation
            />
            <View style={styles.addMarkerButtonContainer}>
                <TouchableOpacity style={styles.addMarkerButton} onPress={openCameraScreen}>
                    <Icon 
                        name="add-circle"
                        size={44}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        </Body>
    );
};

export default Locations;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    addMarkerButtonContainer: {
        position: 'absolute',
        bottom: 40,
        right: 40,
        zIndex: 10,
    },
    addMarkerButton: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 100
    }
});
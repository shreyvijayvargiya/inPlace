import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import Body from '../../modules/Layout/Body';
import { Icon } from 'react-native-elements';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchLocations } from '../../modules/Api/locationsApi';
import { useIsFocused, useFocusEffect } from '@react-navigation/core';
import MarkerComponent from './MarkerComponent';
import RBSheet from 'react-native-raw-bottom-sheet';
import LocationDetails from './LocationDetails';


const Locations = ({ navigation }) => {
    
    const { userMetaData, markersLocation } = useSelector(state => state.userReducer)
    const [ locations, setLocations ] = useState({
        loading: true,
        data: markersLocation 
    });
    const [activeLocation, setActiveLocation] = useState(null);
    let bottomSheetRef;

    const [ region, setRegion ] = useState({
        latitude: userMetaData.userLocation.latitude,
        longitude: userMetaData.userLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useFocusEffect(
        React.useCallback(() => {
            fetchLocations()
        }, [ userMetaData ])
    );

    const openCameraScreen = () => {
        navigation?.navigate('Camera')
    };
    
    const showLocationDetails = (coords) => {
        bottomSheetRef.open();
        setActiveLocation(coords);
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
                
            >
                {locations.data && Object.keys(locations.data).map(item => {
                    const coords = locations.data[item].locationCoords;
                    return <MarkerComponent key={item} markerId={item} coords={coords} showLocationDetails={() => showLocationDetails(coords)} />
                })}
            </MapView>
            <View style={styles.addMarkerButtonContainer}>
                <TouchableOpacity style={styles.addMarkerButton} onPress={openCameraScreen}>
                    <Icon 
                        name="add-circle"
                        size={44}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
            <RBSheet
                ref={ref => {
                    bottomSheetRef = ref;
                }}
                height={500}
                openDuration={250}
                customStyles={{
                    container: {
                        justifyContent: "center",
                        alignItems: "center",
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                    }
                }}
            >
                <LocationDetails activeLocation={activeLocation} />
            </RBSheet>
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
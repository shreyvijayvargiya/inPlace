import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Marker, MarkerAnimated } from 'react-native-maps';

const MarkerComponent = ({ coords, showLocationDetails }) => {

    return (
        <Marker coordinate={{ latitude: coords.latitude, longitude: coords.longitude }} onPress={showLocationDetails}>
            <Icon 
                size={42}
                name="location-on"
                color="green"
            />
        </Marker>
    );
};
export default MarkerComponent;

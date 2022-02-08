import React from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';
import Body from '../../modules/Layout/Body';

const Locations = () => {
    
    return (
        <Body>
            <Text>Location screen</Text>
        </Body>
    );
};

export default Locations;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
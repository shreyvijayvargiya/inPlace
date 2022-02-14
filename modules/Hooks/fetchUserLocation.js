import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export const fetchUserLocation = () => {
    let location, error, loading = true;

    const fetchLocation = async() => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            error = 'Permission to access location was denied';
            return;
        }
        
        location = await Location.getCurrentPositionAsync({});
    };
    fetchLocation();

    let text = 'Waiting..';
    if (error) {
        text = error;
        loading = false;
    } else if (location) {
        text = JSON.stringify(location);
        loading = false;
    }

    return { location, error, loading }
}
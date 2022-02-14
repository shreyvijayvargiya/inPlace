import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export const fetchUserLocation = async() => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        return { data: null, error: 'Permission to access location was denied' };
    }else {
        const location = await Location.getCurrentPositionAsync({});
        return { data: location, error: null }
    }

}
import firebase from 'firebase/compat/app';
import { MARKERS_LOCATIONS } from '../Redux/constants';
import { store } from '../Redux/store';

const locationObjInterface = {
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number
    },
    userId: String,
    timestamp: Date.now(),
    name: String,
    uploadedImages: Array,
    description: String,
    metadata: String
}

export const fetchLocations = async() => {
    const db = await firebase.database().ref("locations");
    const data = (await db.once("value")).val();
    store.dispatch({ type: MARKERS_LOCATIONS, payload: data });
};

export const addLocation = async(data) => {
    const db = await firebase.database().ref("locations");
    db.push(data);
};
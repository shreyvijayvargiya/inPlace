
import {
    SET_USER,
    REMOVE_USER,
    SET_USER_META_DATA,
    MARKERS_LOCATIONS,
} from "../constants";

const initialState = {
    loggedInUserData: {
        userId: "",
        userEmail: "",
        userName: "",
        userImage: "",
        userKey: "",
    },
    isUserLoggedIn: false,
    userMetaData: {
        userLocation: null
    },
    markersLocation: null
}
export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER:
            return {
                ...state, 
                loggedInUserData: { 
                    userEmail: action.payload.userData.userEmail,
                    userId: action.payload.userData.userId,
                    userImage: action.payload.userData.userImage,
                    userName: action.payload.userData.username,
                    userKey: action.payload.userData.userKey,
                 },
                isUserLoggedIn: action.payload.isUserLoggedIn,
            }
        case SET_USER_META_DATA: {
            return {
                ...state,
                userMetaData: {
                    userLocation: action.payload.userLocation
                }
            }
        }
        case MARKERS_LOCATIONS: {
            return {
                ...state,
                markersLocation: action.payload
            }
        }
        default:
            return state;
            
    }
};
import {
    SET_USER,
    REMOVE_USER,
    SET_USER_META_DATA,
    MARKERS_LOCATIONS
} from "../constants";
  
export const setUserInStore = (payload) => {
    return async dispatch => {
        dispatch({ type: SET_USER, payload: payload });
    };
};
  
export const removeUserFromStore = () => {
    return async dispatch => {
        dispatch({ type: REMOVE_USER });
    };
};
export const setUserMetaData = (payload) => {
    return async dispatch => {
        dispatch({ type: SET_USER_META_DATA, payload })
    }
}
export const addMarkersLocation = payload => {
    return async dispatch => {
        dispatch({ type: MARKERS_LOCATIONS, payload })
    }
};
import { SET_USER_META_DATA } from '../Redux/constants';
import { store } from '../Redux/store';

export const loginApi = async(navigation, location ) => {
    // const result = await Google.logInAsync({
    //     clientId: '918563617495-ov1sqj1kdijjrk104d41ba0p2vrfisum.apps.googleusercontent.com',
    //     androidClientId: '918563617495-ov1sqj1kdijjrk104d41ba0p2vrfisum.apps.googleusercontent.com',
    //     iosClientId: '918563617495-hkak7n9psbtdmuuu36ikntgj3b1sp4g0.apps.googleusercontent.com',
    //     scopes: ['profile', 'email'],
    // });
    
    // if (result.type === 'success') {
    //     return result.accessToken;
    // } else {
    //     return { cancelled: true };
    // }
    if(location){
        store.dispatch({ type: SET_USER_META_DATA, payload: { userLocation: location?.coords  }});
        navigation.navigate("Locations")
    }
}
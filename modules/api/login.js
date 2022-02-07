import * as Google from 'expo-google-app-auth';

export const loginApi = async() => {
    const result = await Google.logInAsync({
        clientId: '918563617495-ov1sqj1kdijjrk104d41ba0p2vrfisum.apps.googleusercontent.com',
        androidClientId: '918563617495-ov1sqj1kdijjrk104d41ba0p2vrfisum.apps.googleusercontent.com',
        iosClientId: '918563617495-hkak7n9psbtdmuuu36ikntgj3b1sp4g0.apps.googleusercontent.com',
        // androidStandaloneAppClientId: '918563617495-ov1sqj1kdijjrk104d41ba0p2vrfisum.apps.googleusercontent.com',
        // iosStandaloneAppClientId: '918563617495-hkak7n9psbtdmuuu36ikntgj3b1sp4g0.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
    });
    console.log(result, 'result');
    if (result.type === 'success') {
        return result.accessToken;
    } else {
        return { cancelled: true };
    }
}
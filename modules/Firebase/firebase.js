import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCeLhGLifnVAzvDdmTfNCOxn_6qFjc2Bf0',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://inplace-39219-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'inplace-39219',
  storageBucket: 'gs://inplace-39219.appspot.com',
  appId: '1:582403270498:android:20638ef05c6472f7edee3b',
  measurementId: 'G-measurement-id',
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase;



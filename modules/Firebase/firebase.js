import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCeLhGLifnVAzvDdmTfNCOxn_6qFjc2Bf0',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://inplace-39219-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'inplace-39219',
  storageBucket: 'inplace-39219.appspot.com',
  appId: '1:582403270498:android:20638ef05c6472f7edee3b',
  measurementId: 'G-measurement-id',
};

let app;
app = initializeApp(firebaseConfig);
export default app;



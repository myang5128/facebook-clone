// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKOWT55QabRj0x51UhsQn5feHJP2OSkNI",
    authDomain: "facebook-clone-17e40.firebaseapp.com",
    projectId: "facebook-clone-17e40",
    storageBucket: "facebook-clone-17e40.appspot.com",
    messagingSenderId: "463356524576",
    appId: "1:463356524576:web:a40d1888a7196c37ede445",
    measurementId: "G-2T9CZVE1VG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
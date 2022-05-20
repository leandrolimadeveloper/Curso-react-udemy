import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDd5X7ZF3bhzIIEwvUFruN4MIEq7bcCawI",
    authDomain: "cursoreact-ef0f9.firebaseapp.com",
    projectId: "cursoreact-ef0f9",
    storageBucket: "cursoreact-ef0f9.appspot.com",
    messagingSenderId: "457973284723",
    appId: "1:457973284723:web:9f902b14735bd53fe68f06",
    measurementId: "G-ZEP560MFC4"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase
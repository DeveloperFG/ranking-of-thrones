import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'




let firebaseConfig = {
    apiKey: "AIzaSyD6LnqjQs08M7LKmvWAkld1NxSTRhf59mU",
    authDomain: "raking-of-thrones.firebaseapp.com",
    projectId: "raking-of-thrones",
    storageBucket: "raking-of-thrones.appspot.com",
    messagingSenderId: "973326856445",
    appId: "1:973326856445:web:c3bebe38c1080426a88e94"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

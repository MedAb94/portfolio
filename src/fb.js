import firebase from 'firebase'
import 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyBnliryyB8w_P1eeYZ5IHNqWERBKPfFj0w",
    authDomain: "portfolio-863b9.firebaseapp.com",
    databaseURL: "https://portfolio-863b9.firebaseio.com",
    projectId: "portfolio-863b9",
    storageBucket: "portfolio-863b9.appspot.com",
    messagingSenderId: "350123540955",
    appId: "1:350123540955:web:d7aeffbe861784238327fe",
    measurementId: "G-Y5SXJ0MPZ0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
require('firebase/firestore')
const db = firebase.firestore();
db.settings({timestampInSnapshots: true});

export default db;
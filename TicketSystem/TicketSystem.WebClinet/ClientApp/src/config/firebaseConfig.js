import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyD7DkEu4oJEmT9qYvk_IdC7Y7IZcB0CvG0",
    authDomain: "ticket-system-65229.firebaseapp.com",
    projectId: "ticket-system-65229",
    storageBucket: "ticket-system-65229.appspot.com",
    messagingSenderId: "705828433556",
    appId: "1:705828433556:web:515c27840a0bac9857ce81"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;

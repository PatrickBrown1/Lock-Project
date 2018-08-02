import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAeryMZkx937sD6vgp0kb_2qvWEz0hZbPI",
    authDomain: "lock-app-dbba5.firebaseapp.com",
    databaseURL: "https://lock-app-dbba5.firebaseio.com",
    projectId: "lock-app-dbba5",
    storageBucket: "lock-app-dbba5.appspot.com",
    messagingSenderId: "468420612945"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const database = firebase.database();

export {
  auth,
  database,
};
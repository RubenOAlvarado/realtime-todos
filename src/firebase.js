import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCEmsFhUSNr-s6pxXS3nYZlgN2mj5va4rE",
    authDomain: "svelte-todo-e8eb5.firebaseapp.com",
    databaseURL: "https://svelte-todo-e8eb5.firebaseio.com",
    projectId: "svelte-todo-e8eb5",
    storageBucket: "svelte-todo-e8eb5.appspot.com",
    messagingSenderId: "447334012844",
    appId: "1:447334012844:web:45f35fd91cb409f5a2cc09"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
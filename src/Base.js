import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAopghbIJTRrYXUrCKyWYe8q8deF2Pw7bk",
    authDomain: "hackthon-ufojs-portofantwerpen.firebaseapp.com",
    databaseURL: "https://hackthon-ufojs-portofantwerpen.firebaseio.com",
    projectId: "hackthon-ufojs-portofantwerpen",
    storageBucket: "hackthon-ufojs-portofantwerpen.appspot.com",
    messagingSenderId: "284206318838"
});

export default app;
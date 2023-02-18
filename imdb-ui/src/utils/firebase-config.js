import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {

    apiKey: "AIzaSyDi0pyvSsjCQPTyYnpedzVBIrtbT5M6DWM",
    authDomain: "react-imdb-clone-e541f.firebaseapp.com",
    projectId: "react-imdb-clone-e541f",
    storageBucket: "react-imdb-clone-e541f.appspot.com",
    messagingSenderId: "928996852049",
    appId: "1:928996852049:web:deb55990ee7bf490585370",
    measurementId: "G-8DXHZZHXBL"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)

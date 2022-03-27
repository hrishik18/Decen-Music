import * as firebase from "firebase/app";
import "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAuh8-O9eFO5H7uZHLOPEfJ41uLEg8tXtA",
    authDomain: "codeshastra-53268.firebaseapp.com",
    projectId: "codeshastra-53268",
    storageBucket: "codeshastra-53268.appspot.com",
    messagingSenderId: "652398618891",
    appId: "1:652398618891:web:007d10d667134810ca1a0e",
    measurementId: "G-DZTYYEEJN4"
};

export const app = firebase.initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

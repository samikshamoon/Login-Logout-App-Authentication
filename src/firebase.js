import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAZyWmY1iBItlFZoS46vSGRCZaaCiPSt0M",
    authDomain: "login-2cd1d.firebaseapp.com",
    projectId: "login-2cd1d",
    storageBucket: "login-2cd1d.appspot.com",
    messagingSenderId: "206277224046",
    appId: "1:206277224046:web:3e127c4e19579962eaa87f",
    measurementId: "G-M8HJ795YYP"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
// ==========================================
// CUSTOMER SELF ORDERING - FIREBASE.JS
// ==========================================

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    setDoc,
    doc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ==========================================
// FIREBASE CONFIG
// ==========================================

const firebaseConfig = {

    apiKey:
        "AIzaSyDi40oL-JtE9LXF8CPGFHHLL6Hqe4p_GDA",

    authDomain:
        "restaurant-63230.firebaseapp.com",

    projectId:
        "restaurant-63230",

    storageBucket:
        "restaurant-63230.firebasestorage.app",

    messagingSenderId:
        "624519670365",

    appId:
        "1:624519670365:web:f23d10079a9adf2c51bbb4"

};


// ==========================================
// INITIALIZE FIREBASE
// ==========================================

const app =
    initializeApp(firebaseConfig);


// ==========================================
// FIRESTORE
// ==========================================

const db =
    getFirestore(app);


// ==========================================
// GLOBAL DATABASE
// ==========================================

window.db = db;


// ==========================================
// GLOBAL FIREBASE FUNCTIONS
// ==========================================

window.fb = {

    collection,

    addDoc,

    getDoc,

    setDoc,

    doc,

    serverTimestamp

};


// ==========================================
// CONNECTION
// ==========================================

console.log(
    "Firebase Connected Successfully"
);

window.firebaseReady = true;

window.dispatchEvent(
    new Event("firebaseReady")
);
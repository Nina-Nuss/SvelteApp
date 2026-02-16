// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { browser } from "$app/environment";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmio4GSFnZcAsRL_sXD9VYmlJ2XRol-yc",
    authDomain: "test-58f68.firebaseapp.com",
    projectId: "test-58f68",
    storageBucket: "test-58f68.firebasestorage.app",
    messagingSenderId: "803838171445",
    appId: "1:803838171445:web:39676dcc8955980752947c",
    measurementId: "G-RYEFV8LKCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics nur im Browser initialisieren (funktioniert nicht bei SSR)
let analytics;
if (browser) {
    analytics = getAnalytics(app);
    console.log("✅ Firebase Analytics initialisiert");
}

export { app, analytics };
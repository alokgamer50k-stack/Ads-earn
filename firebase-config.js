// js/firebase-config.js

// Firebase SDKs for Browser (GitHub Pages support)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your web app's Firebase configuration (Your exact keys)
const firebaseConfig = {
  apiKey: "AIzaSyAb9wp27HS6xIR7sf_qQSIq1ZUm4Ayrpi0",
  authDomain: "ads-earn-54c44.firebaseapp.com",
  projectId: "ads-earn-54c44",
  storageBucket: "ads-earn-54c44.firebasestorage.app",
  messagingSenderId: "668584673385",
  appId: "1:668584673385:web:551517839fdefa77f162f8"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Database & Authentication
const db = getFirestore(app);
const auth = getAuth(app);

// Exporting them so other files (like admin.js & wallet.js) can use them safely
export { app, db, auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfh2PsAnPWNqbQIfIfRewUdtkVyyvTC1A",
  authDomain: "product-listing-aa499.firebaseapp.com",
  databaseURL: "https://product-listing-aa499-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "product-listing-aa499",
  storageBucket: "product-listing-aa499.firebasestorage.app",
  messagingSenderId: "201395713091",
  appId: "1:201395713091:web:13f985024152d3f18c10f6",
  measurementId: "G-0JN2TNECXB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
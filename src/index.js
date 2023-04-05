import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

  apiKey: "AIzaSyD7-u-G_JIEqcgicziXcwSYPjf5imGVP2w",

  authDomain: "final-react-manuelsanchezromer.firebaseapp.com",

  projectId: "final-react-manuelsanchezromer",

  storageBucket: "final-react-manuelsanchezromer.appspot.com",

  messagingSenderId: "814213480498",

  appId: "1:814213480498:web:b73ed98f5c7fd1a5ed3c2b",

  measurementId: "G-BSD03X5QG8"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);



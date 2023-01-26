// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgYtqqJFbQxk0wtzL-2aDODxwT712LOwM",
  authDomain: "empty-fridge-4cad0.firebaseapp.com",
  projectId: "empty-fridge-4cad0",
  storageBucket: "empty-fridge-4cad0.appspot.com",
  messagingSenderId: "750218833559",
  appId: "1:750218833559:web:b25cb39e6615aeb64703d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
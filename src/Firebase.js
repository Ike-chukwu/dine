// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpKRvuYlmu6UrBALe29_tozVO4i_4t15U",
  authDomain: "dine-restaurant-b934e.firebaseapp.com",
  projectId: "dine-restaurant-b934e",
  storageBucket: "dine-restaurant-b934e.appspot.com",
  messagingSenderId: "1048839248860",
  appId: "1:1048839248860:web:894da82c75481aa9470d19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
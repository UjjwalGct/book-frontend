// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//  Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuCw8OjiW4XAs3GmyfgV1ijX_l3__SAgk",
  authDomain: "mern-book-inventory-852a3.firebaseapp.com",
  projectId: "mern-book-inventory-852a3",
  storageBucket: "mern-book-inventory-852a3.appspot.com",
  messagingSenderId: "703015870232",
  appId: "1:703015870232:web:273c08616e72017c19886d"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);

export default app;
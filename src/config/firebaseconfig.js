// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg_4768Xu-sAJzjKaMQyWPqGKglMQY6Yk",
  authDomain: "reactjs-fireauth-login-signup.firebaseapp.com",
  projectId: "reactjs-fireauth-login-signup",
  storageBucket: "reactjs-fireauth-login-signup.appspot.com",
  messagingSenderId: "684642607872",
  appId: "1:684642607872:web:3517de52a7f12610b709e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyCMpP0NZXWAnEfHd_z8uYVvXNocKER-kdo",
//   authDomain: "newspaper-fullstack-website.firebaseapp.com",
//   projectId: "newspaper-fullstack-website",
//   storageBucket: "newspaper-fullstack-website.appspot.com",
//   messagingSenderId: "391231402396",
//   appId: "1:391231402396:web:37c4c1e83eec6bf5731859"
apiKey: import.meta.env.VITE_APIKEY,
authDomain: import.meta.env.VITE_AUTHDOMAIN,
projectId: import.meta.env.VITE_PROJECTID,
storageBucket: import.meta.env.VITE_STORAGEBUCKET,
messagingSenderId: import.meta.env.VITE_MESSAGEINGSENDERID,
appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHz7009LWnVCGyNHvEyG2c77_zIkMYF1o",
    authDomain: "fir-auth-learn-807cf.firebaseapp.com",
    projectId: "fir-auth-learn-807cf",
    storageBucket: "fir-auth-learn-807cf.appspot.com",
    messagingSenderId: "857292943923",
    appId: "1:857292943923:web:2fa1ddc441b8890287e946"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
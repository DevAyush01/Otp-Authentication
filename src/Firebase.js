import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhvOMoKM77arQKsXiuwDFmNOHheYNvcaM",
  authDomain: "otp-app-6c812.firebaseapp.com",
  projectId: "otp-app-6c812",
  storageBucket: "otp-app-6c812.appspot.com",
  messagingSenderId: "311896398370",
  appId: "1:311896398370:web:f1488d32032d389874087b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
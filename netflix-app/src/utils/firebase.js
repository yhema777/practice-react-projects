import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAManrCClaCe6XOs028YJnjty_S6jqSuLo",
  authDomain: "netflixgpt-26139.firebaseapp.com",
  projectId: "netflixgpt-26139",
  storageBucket: "netflixgpt-26139.firebasestorage.app",
  messagingSenderId: "505789339300",
  appId: "1:505789339300:web:67363f29e0c684d93af831",
  measurementId: "G-XR9XLBHLSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
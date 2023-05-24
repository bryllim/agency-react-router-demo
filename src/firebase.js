import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4IWf9-F-3p264IuR1xYgjQ6M60450H5U",
  authDomain: "wd63-d9c2b.firebaseapp.com",
  projectId: "wd63-d9c2b",
  storageBucket: "wd63-d9c2b.appspot.com",
  messagingSenderId: "650808452214",
  appId: "1:650808452214:web:cc86a90df80fdeb9a86b57",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export {db};

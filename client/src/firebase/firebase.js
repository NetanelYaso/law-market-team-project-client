import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrwSy2vlwY1tsbu0wAmQBfq56FBQVhcCg",
  authDomain: "law-market-client.firebaseapp.com",
  projectId: "law-market-client",
  storageBucket: "law-market-client.appspot.com",
  messagingSenderId: "642840551623",
  appId: "1:642840551623:web:c5bda2e0ec9a8f60eb5ee2",
  measurementId: "G-27TRGEFMV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;
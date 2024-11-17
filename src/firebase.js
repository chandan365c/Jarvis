import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB3fQCQT6fhZjEGan9IYAu9O1Ctods6phU",
    authDomain: "anish-app-18596.firebaseapp.com",
    projectId: "anish-app-18596",
    storageBucket: "anish-app-18596.firebasestorage.app",
    messagingSenderId: "884554279727",
    appId: "1:884554279727:web:a2a9c2a60c81fe24e08fda",
    measurementId: "G-86NPNC2EJW"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Set the authentication persistence to local
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistence set to local");
  })
  .catch((error) => {
    console.error("Error setting persistence: ", error);
  });

export { auth, googleProvider };
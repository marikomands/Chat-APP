import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyBv_r5fsV93GC3KLn66Eyz_OoQV5EkTuY0",
  // authDomain: "<your-auth-domain>",
  databaseURL:
    "https://chat-application-d0e35-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "chat-application-d0e35",
  storageBucket: "chat-application-d0e35.appspot.com",
  messagingSenderId: "485309375499",
};
const firebaseConfig = initializeApp(config);
// const database = getDatabase(app);
// const auth = getAuth(app);

export default firebaseConfig;

// export { app as default, database, auth };

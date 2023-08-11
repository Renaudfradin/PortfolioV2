import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCBYgS9EwKZnxWKAOc8uQWFsdunESlFvvw",
    authDomain: "portfoliov3-39e94.firebaseapp.com",
    projectId: "portfoliov3-39e94",
    storageBucket: "portfoliov3-39e94.appspot.com",
    messagingSenderId: "758214030598",
    appId: "1:758214030598:web:8600aa96a2b85726bd1a87",
    measurementId: "G-11HSXLZ0R8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export default { auth, firestore, storage };
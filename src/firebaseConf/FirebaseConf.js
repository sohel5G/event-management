import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDxlQDD50hV9AZNDICu4oIHJdxDmhzG2Gs",
    authDomain: "assignment-nine-b7897.firebaseapp.com",
    projectId: "assignment-nine-b7897",
    storageBucket: "assignment-nine-b7897.appspot.com",
    messagingSenderId: "925858258161",
    appId: "1:925858258161:web:b7476d1aa6caf0cf98dd50"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


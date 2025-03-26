import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
});
const firestore = getFirestore(app);

const recordUserSelect = (selected, location) => {
    console.log(selected, parseInt(location, 10));
    // record which video was played
    addDoc(collection(firestore, "advertisement"), {
        selected: selected,
        location: parseInt(location, 10),
    }).then((res) => {
        console.log(res);
    });
}

export { app, recordUserSelect };
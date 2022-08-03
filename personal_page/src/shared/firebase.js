import {
    initializeApp
} from "firebase/app"
import {
    getFirestore
} from "firebase/firestore"
import {
    getAuth
  } from "firebase/auth"

    const firebaseConfig = {
        apiKey: "AIzaSyA_26Um8CHxc_uqMVTG1mYLxDvtht-c2Xg",
        authDomain: "personal-page-51742.firebaseapp.com",
        projectId: "personal-page-51742",
        storageBucket: "personal-page-51742.appspot.com",
        messagingSenderId: "483745827843",
        appId: "1:483745827843:web:a9976f861ef3c5e2811236"
    };

    // init firebase app
    initializeApp(firebaseConfig);

    // init database services
    const db = getFirestore();
    const auth = getAuth();

    export {db, auth}

    // collection ref
    // const colRef = collection(db, 'about');

    // // get collection data  
    // getDocs(colRef)
    //     .then((snapshot) => {
    //         let data = []
    //         console.log(snapshot);
    //         console.log(snapshot.docs);

    //         snapshot.docs.forEach((doc) => {
    //             console.log(doc.data());
    //             data.push({
    //                 ...doc.data(),
    //                 id: doc.id
    //             })
    //         })
    //         console.log(data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
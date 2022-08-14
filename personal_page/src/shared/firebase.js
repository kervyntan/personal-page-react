import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_26Um8CHxc_uqMVTG1mYLxDvtht-c2Xg",
  authDomain: "personal-page-51742.firebaseapp.com",
  projectId: "personal-page-51742",
  storageBucket: "personal-page-51742.appspot.com",
  messagingSenderId: "483745827843",
  appId: "1:483745827843:web:a9976f861ef3c5e2811236",
};
// const addAbout = document.querySelector('.reachme__section');
// console.log(addAbout)
// console.log(contactForm.current);

//  getting data of the collection in realtime
// onSnapshot(colRef, (snapshot) => {
//   let collection = [];
//   snapshot.forEach( (item) => {
//     collection.push({id: item.id, ...item.data()})
//   })
//   console.log(collection);
// })
// console.log(colRef)

// // query to db
// const q = query(colRef, where("name", "==", "test@gmail.com"), orderBy("test", "desc"))

// // query to db for no restriction data
// const qq = query(colRef, orderBy("createdAt"))

// getDocs returns a promise
// catch promise and loop through each entry
// getDocs(q)
// .then( (docs) => {
//   docs.forEach( (doc) => {
//     console.log(doc.data());
//   })
// })

// get a single document
// const docRef = doc(db, 'about', "9NX7VukHCyZvv0l14spR");
// console.log(docRef);
// getDoc(docRef)
// .then( (doc) => {
//   console.log(doc.data());
// })

// realtime for single document
// onSnapshot(docRef, (doc) => {
//   console.log(doc.data())
// })

// init firebase app
initializeApp(firebaseConfig);

// init database services
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { db, auth, storage };

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

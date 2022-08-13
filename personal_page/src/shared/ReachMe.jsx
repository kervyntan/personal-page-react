import React, { useState, useRef } from "react";
import Button from "./Button";
import wifi from "../assets/network-icon.png";
import Modal from "./Modal";
import {db, auth} from "./firebase"
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  doc,
  serverTimestamp
} from "firebase/firestore"
import ContactForm from "./ContactForm";
const ReachMe = () => {
  const reachMeForm = useRef('reachMeForm');

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

  const signOutHandler = () => {
    // signOut(auth)
    // .then( () => {
    //   console.log("user has signed out")
    // })
  }

  return (
    <div className="reachme__section">
      <h2 className="reachme__section__heading"> Reach Me </h2>
      <img width="50" src={wifi} alt="wifi-icon" />

{/* 
      <form ref={contactForm} className="testForm" onSubmit={testOnSubmit} >
          <input type="text" name="name" required/>
          <input type="text" name="test" required/>
          <button type="submit">Click Here</button>
      </form>

      <Button onClickHandler={signOutHandler} text="Sign out" /> */}

      <ContactForm />
    </div>
    
  );
};

export default ReachMe;

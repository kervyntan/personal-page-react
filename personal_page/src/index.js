import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

  // const addAbout = document.querySelector('.reachme__section');
  // // addAbout.addEventListener('submit', (e) => {
  // //   e.preventDefault();
  // //   addDoc(colRef, {
  
  // //   })
  // // })
  // console.log(addAbout)

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


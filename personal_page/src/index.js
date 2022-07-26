import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app"

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const firebaseConfig = {
  apiKey: "AIzaSyA_26Um8CHxc_uqMVTG1mYLxDvtht-c2Xg",
  authDomain: "personal-page-51742.firebaseapp.com",
  projectId: "personal-page-51742",
  storageBucket: "personal-page-51742.appspot.com",
  messagingSenderId: "483745827843",
  appId: "1:483745827843:web:a9976f861ef3c5e2811236"
};

initializeApp(firebaseConfig);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

import React, { useRef, useState } from "react";
import "./App.css";
import SignIn from "./components/signin";
import SignOut from "./components/signout";
import ChatRoom from "./components/chatroom";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAOvsOwkKjEWJoEL4zf79iVimS7972NkEg",
  authDomain: "chatapp-b1947.firebaseapp.com",
  projectId: "chatapp-b1947",
  storageBucket: "chatapp-b1947.appspot.com",
  messagingSenderId: "265300013529",
  appId: "1:265300013529:web:fb85c0f7e2239bd47169c8",
  measurementId: "G-0PPN37516F",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
};

export default App;

import './App.css';

import React from 'react';
import SignIn from './components/SignIn';
import firebase from 'firebase/compat/app'; 

import 'firebase/compat/firestore';
import 'firebase/compat/auth';  

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyD91IJyEM0QYmQIVUI9K637FqhQdhLg3_o",
    authDomain: "dashboard-af8ff.firebaseapp.com",
    projectId: "dashboard-af8ff",
    storageBucket: "dashboard-af8ff.appspot.com",
    messagingSenderId: "547541435841",
    appId: "1:547541435841:web:e7438bfb9a3c15f4d89b40",
    measurementId: "G-BF0NBG4JK8"

})

export const auth = firebase.auth();
const firestore = firebase.firestore();



function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <SignOut />
      </header>
      
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}



function SignOut(){
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const [user] = useAuthState(auth);
  console.log(user)
  return (
    <div>
      <h2> Welcome, {user.displayName}</h2>
      <img src={user.photoURL}></img>
    </div>
  )
}

export default App;

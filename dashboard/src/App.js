import './App.css';
import React, { useState } from 'react';
import SignIn from './components/SignIn';
import firebase from 'firebase/compat/app'; 

import 'firebase/compat/firestore';
import 'firebase/compat/auth';  

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import SidePanel from './components/SidePanel';
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
     
      <section>
        {user ? <Dashboard /> : <SignIn />}
      </section>

    </div>
  );
}



function SignOut(){
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function Dashboard() {
  const [isActive, setIsActive] = useState(false);

  // Event handler for button click
  const togglePanel = () => {
    // Toggle the class on each click
    setIsActive(!isActive);
  };

  const [user] = useAuthState(auth);
  console.log(user)
  return (
    <div>
      <div >
        <button className="buttonDiv" onClick={togglePanel}>click</button>
      </div>
      <div>
      <SidePanel isActive={isActive} togglePanel={togglePanel} />

      </div>
      
    </div>
  )
}

export default App;

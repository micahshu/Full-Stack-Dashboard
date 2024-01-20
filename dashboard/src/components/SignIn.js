import firebase from "firebase/compat/app";
import { auth } from "../App";
import './SignIn.css'

export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="signInWrapper">
      <div className="signInCard">
        <button className="signInButton" onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  );
}

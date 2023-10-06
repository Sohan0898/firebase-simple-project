import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Home = () => {
    const [user, setUser] = useState(null);

const handleGoogleSignIn = () =>{

    signInWithPopup(auth, googleProvider)
    .then((result) => {
        const loggingUser = result.user;
        console.log(loggingUser);
        setUser(loggingUser);
    }) 
    .catch((error) => {
        console.log(error);
    })
}

const handleSignOut = ()=>{
    signOut(auth)
    .then((result) => {
        setUser(null);


        
      }).catch((error) => {
       console.log(error);
      });
}
  return (
    <div>
      <h1>This is home</h1>
      <button className="btn mt-12" onClick={handleGoogleSignIn}>Google Sign In</button>
      {
        user && <div>
            <p>User: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <img className="w-auto mx-auto" src={user.photoURL} alt="" />
        </div>
      }

      <button className="btn mt-12" onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;

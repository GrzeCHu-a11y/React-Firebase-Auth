import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth, provider } from "./main";

const Root = () => {
  const [user, setUserData] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserData(user);
    } else {
      setUserData(null);
    }
  });

  const handleSignIn = async () => {
    try {
      const authResult = await signInWithPopup(auth, provider);
      console.log(authResult.user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Hello {user ? user.displayName : "Firebase"}</h1>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Root;

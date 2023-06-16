import React, { useContext, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../main";

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
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

  return <AuthContext.Provider value={{ user, handleSignIn, handleSignOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error("use auth needs to be used inside authContext porvider");
  }
  return auth;
};

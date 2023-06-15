import React from "react";

import { useAuth } from "../providers/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";

export const Root = () => {
  const { user, handleSignIn, handleSignOut } = useAuth();
  return (
    <>
      <h1>Hello {user ? user.displayName : "Firebase"}</h1>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignOut}>Sign Out</button>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <Outlet />
    </>
  );
};

export default Root;

import React from "react";

import { useAuth } from "../providers/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Root = () => {
  const { user, handleSignIn, handleSignOut } = useAuth();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">React Firebase Auth</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="px-3 text-decoration-none" to="/">
              Home
            </NavLink>
            <NavLink className="px-3 text-decoration-none" to="/posts">
              Posts
            </NavLink>
            <NavLink className="px-3 text-decoration-none" to="/" onClick={handleSignIn}>
              Sign In
            </NavLink>
            <NavLink className="px-3 text-decoration-none" to="/" onClick={handleSignOut}>
              Sign Out
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <h1 className="py-4 text-center">Hello {user ? user.displayName : "Firebase"}</h1>
      <h3 className="py-4 text-center">{user ? "You have logged in successfully. Go to posts page" : "log in to view content in posts page"}</h3>
      <Outlet />
    </>
  );
};

export default Root;

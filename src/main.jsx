import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import Root from "./routes/Root";
import { AuthProvider } from "./providers/AuthProvider";
import ProtectedRoute from "./helpers/ProtectedRoute";
import Posts from "./routes/Posts";
import "bootstrap/dist/css/bootstrap.min.css";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByJfGiBY_HLxQ2KMSkxX7GtUNuczJ667o",
  authDomain: "react-remote-drive.firebaseapp.com",
  projectId: "react-remote-drive",
  storageBucket: "react-remote-drive.appspot.com",
  messagingSenderId: "661491417054",
  appId: "1:661491417054:web:65b406a7c47a8aecc7274f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index />
      <Route path="posts" element={<ProtectedRoute />}>
        <Route index element={<Posts />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

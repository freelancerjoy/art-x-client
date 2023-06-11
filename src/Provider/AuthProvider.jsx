import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
export const AuthContest = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  // user create email and password
  const userCreate = (email, password) => {
    console.log(email, password);
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update Profile
  const profileUpdate = (user, name, photoUrl) => {
    setLoading(true);
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  // sign in email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google SignIn
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout user
  const logOutUser = () => {
    setLoading(true);
    signOut(auth);
  };
  const authInfo = {
    user,
    loading,
    signIn,
    userCreate,
    profileUpdate,
    googleSignIn,
    logOutUser,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContest.Provider value={authInfo}>{children}</AuthContest.Provider>
  );
};

export default AuthProvider;

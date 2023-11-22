import React, { createContext, useEffect, useState } from 'react';
import {
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '../firebase.init';

export const AuthContext = createContext();
const provider =new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('user observing');
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  const verifyEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser)
      .then(() => {
        // Verification email sent successfully
      })
      .catch((err) => {
        setError(err.message);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  const forgetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent successfully
      })
      .catch((err) => {
        setError(err.message);
        throw err;
      })
      .finally(() => setLoading(false));
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;
        setUser(newUser);
        return newUser;
      })
      .catch((err) => {
        setError(err.message);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const signedInUser = userCredential.user;
        setUser(signedInUser);
        return signedInUser;
      })
      .catch((err) => {
        setError(err.message);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => setUser(null))
      .catch((err) => {
        setError(err.message);
        throw err;
      })
      .finally(() => setLoading(false));
  };
  const signInWithGoogle=()=>{
    return signInWithPopup(auth, provider)
}
  const updateUser = (userInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userInfo)
      .then(() => {
        // Update user object with photoUrl if available
        const updatedUser = auth.currentUser;

        // Access the photoUrl from the user object
        const photoUrl = updatedUser.photoURL;

        // Optionally, you can also update the local state with the new user object
        setUser(updatedUser);

        // Return the updated user object or photoUrl as needed
        return updatedUser;
      })
      .catch((err) => {
        setError(err.message);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  const authInfo = {
    createUser,
    signIn,
    verifyEmail,
    user,
    forgetPassword,
    updateUser,
    logOut,
    loading,
    signInWithGoogle,
    error,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

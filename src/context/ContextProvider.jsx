import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthProvider = createContext(null);

// provider
const googleProvider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // google login
  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // user create
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login
  const loginUser = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
    () => {
      return unsubscribe;
    };
  }, []);

  const authentication = {
    googleLogin,
    createUser,
    loginUser,
    user,
    isLoading,
  };

  return (
    <AuthProvider.Provider value={authentication}>
      {children}
    </AuthProvider.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;

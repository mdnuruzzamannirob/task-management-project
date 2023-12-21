import { useContext } from "react";
import { AuthProvider } from "../context/ContextProvider";

const useAuth = () => {
  const auth = useContext(AuthProvider);
  return auth;
};

export default useAuth;

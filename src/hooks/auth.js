import { createContext, useContext, useState } from "react";
import { AuthService } from "../service/AuthService";

const authContext = createContext();

export default function useAuth() {
  return useContext(authContext);
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const loginWithGoogle = async () => {
    const res = await AuthService.loginWithGoogle();
    console.log(res);
    setUser(res.user ?? null);
    setError(res.error ?? "");
  };

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  const value = { user, error, loginWithGoogle, logout, setUser };

  return <authContext.Provider value={value} {...props} />;
}

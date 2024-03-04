import React, { createContext, useContext, useState } from "react";
import { userLogin, userLogout, userSignup } from "../services/apiServices";
import {
  addToLocalStorage,
  deleteFromLocalStorage,
  getFromLocalStorage,
} from "../utils/localStorageHelper";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(getFromLocalStorage("token"));

  async function signup(credentials) {
    const { data, token } = await userSignup(credentials);
    const user = { user: data, token };
    setUser(user);
    addToLocalStorage("token", user);
  }
  async function login(credentials) {
    const { data, token } = await userLogin(credentials);
    const user = { user: data, token };
    setUser(user);
    addToLocalStorage("token", user);
  }
  async function logout() {
    await userLogout();
    setUser(null);
    deleteFromLocalStorage("token");
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

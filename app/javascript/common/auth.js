import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      let currentUser = await axios.get("http://localhost:3000/logged_in", {
        withCredentials: true,
      });
      setUser(currentUser.data.logged_in);
    } catch (err) {}
  };
  return (
    <AuthContext.Provider value={{ user, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

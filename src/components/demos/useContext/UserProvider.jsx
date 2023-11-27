import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const [user, setUser] = useState("Manikant");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

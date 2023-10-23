import React, { createContext, useState } from "react";
import Component1 from "./Component1";

export const UserContext = createContext();

function UseContextDemo() {
  const [userName, setUserName] = useState("Manikant");
  return (
    <UserContext.Provider value={userName}>
      <div className="demoContainer">
        <div className="demoWrapper">
          <Component1 />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default UseContextDemo;

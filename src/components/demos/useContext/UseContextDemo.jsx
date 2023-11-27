import React from "react";
import Component1 from "./Component1";
import UserProvider from "./UserProvider";

function UseContextDemo() {
  return (
    <UserProvider>
      <div className="demoContainer">
        <div className="demoWrapper">
          <Component1 />
        </div>
      </div>
    </UserProvider>
  );
}

export default UseContextDemo;

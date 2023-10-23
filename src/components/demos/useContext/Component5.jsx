import React, { useContext } from "react";
import { UserContext } from "./UseContextDemo";

function Component5() {
  const userName = useContext(UserContext);
  return <div>Hello, {userName}!</div>;
}

export default Component5;

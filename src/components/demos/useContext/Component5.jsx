import React from "react";
import { useUser } from "./UserProvider";

function Component5() {
  const objUser = useUser();
  return <div>Hello, {objUser.user}!</div>;
}

export default Component5;

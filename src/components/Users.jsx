import React, { useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";

function Users() {
  const [users, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!loading && error) {
    return <h1>Something went wrong!</h1>;
  }

  if (!users) {
    return <h1>No users found!</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <h2 key={user.id}>
          {user.id}. {user.name}
        </h2>
      ))}
    </div>
  );
}

export default Users;

import { link } from "fs";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  // Get (always get fresh data from the API) set revalidate to 10s
  const users: User[] = await res.json();
  return (
    <>
      <h1 style={{ fontWeight: "bold" }}>Users list</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserPage;

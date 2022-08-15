import React from "react";
import {UserContext} from './context'
import Card from "./context";

function AllData() {
  const ctx = React.useContext(UserContext);

  const displayUsers = ctx.users.map((user) => {
    return (
      <tr key={user}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.balance}</td>
      </tr>
    );
  });

  return (
    
<Card
     bgcolor="info"
     length="auto"
      txtcolor="text-light"
    header="All User's Top Secret Data"
      body={
        <table class="table table-dark ">
          <thead> 
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Balance</th>
            </tr>
            </thead>
          <tbody>{displayUsers}</tbody>
        </table>
      }
    />


  );
}
export default AllData
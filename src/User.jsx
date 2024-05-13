import React from "react";

function User({ user }) {
  return (
    <div>
      <ul>
        {user.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default User;

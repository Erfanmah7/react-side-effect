import React from "react";
import { useEffect, useState } from "react";

function User() {
  const [user, setUser] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const json = await res.json();
      setUser(json);
      console.log(json);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {!user.length && <p>Loading</p>}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      {/* <ul>
        {user.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default User;

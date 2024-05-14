import React from "react";
import { useEffect, useState } from "react";
import Counter from "./Counter";

function User() {
  const [user, setUser] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await res.json();
        setUser(json);
      } catch (errorr) {
        console.log(errorr);
      }
    };

    fetchData();
  }, []);

  const clickHandler = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const json = await res.json();
    console.log(json);
  };

  return (
    <div>
      {id > 10 && <Counter />}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={clickHandler}>search</button>
      <ul>
        {user.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default User;

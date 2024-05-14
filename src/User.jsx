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

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
    </div>
  );
}

export default User;

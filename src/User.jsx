import React from "react";
import { useEffect, useState } from "react";
import Counter from "./Counter";

function User() {
  const [user, setUser] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${id}`,
          { signal: controller.signal }
        );
        const json = await res.json();
        setUser(json);
        console.log("seconde");
        console.log(json);
      } catch (error) {
        if (error.name !== "AbortError") console.log("error");
      }
    };
    fetchData();
    return () => {
      controller.abort();
      console.log("first");
    };
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
    </div>
  );
}

export default User;

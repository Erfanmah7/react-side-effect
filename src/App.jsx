import { useEffect, useState } from "react";
import User from "./User";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setUser(json);
    };

    fetchData();
  
  }, []);

  return (
    <>
      <User user={user}/>
    </>
  );
}

export default App;

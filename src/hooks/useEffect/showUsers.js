import { useState, useEffect } from "react";

export default function ShowUser() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        setUser(res);
      });
  }, []);

  return (
    <div>
      <ul>
        {user.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

import { useState } from "react";

export default function Clickfunc() {
  const [counter, setCounter] = useState(0);

  const addHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      you click {counter} times
      <button onClick={addHandler}>click</button>
    </div>
  );
}

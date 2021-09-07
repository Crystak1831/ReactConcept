import { useState, useEffect } from "react";

export default function TimerFun() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const Timer = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    //clean the componet, like componentWillUnmont
    return () => {
      clearInterval(Timer);
    };
  });

  return <div>auto timer {counter}</div>;
}

import { useState, useEffect } from "react";

export default function UseEffectFun() {
  const [count, setCounct] = useState(0);

  // no 2nd parameter, like componentDidmount + componentDidUpdate
  // useEffect(() => {
  // console.log(`test ${count}`);
  // document.title = `clicked ${count} times`;
  // });

  // 2nd parameter is [], like componentDidmount,only render one time
  useEffect(() => {
    console.log("only render one time");
  }, []);

  //useEffect 2nd para has some value，ex:只有count里的值变了，才可以call useEffect里面的 function
  // ---like: shouldcomponentUpdate
  // useEffect(() => {
  //   console.log(`count became ${count}`);
  //   document.title = `clicked ${count} times`;
  // }, [count]);

  // 要是count给一个固定的数，count became就不会发生变化
  useEffect(() => {
    console.log(`count became ${count}`);
    document.title = `clicked ${count} times`;
  }, ["hello"]);

  const addHandler = () => {
    setCounct(count + 1);
  };

  return (
    <div>
      you click {count} times
      <button onClick={addHandler}>click</button>
    </div>
  );
}

import { useRef, useEffect } from "react";

export default function UseRefFun() {
  const myRef1 = useRef();
  const myRef2 = useRef();

  const clickHandler = () => {
    alert(myRef1.current.value);
  };
  useEffect(() => {
    myRef2.current.value = "enter name";
    myRef2.current.focus();
  }, []);

  return (
    <div>
      ex1:
      <input type="text" ref={myRef1} />
      <button onClick={clickHandler}>click</button>
      ex2:
      <input type="text" ref={myRef2} />
    </div>
  );
}

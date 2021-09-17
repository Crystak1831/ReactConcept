import { useState, useMemo } from "react";

export default function Memo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const changeHandler = (e) => {
    setNumber(parseInt(e.target.value));
  };

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const changeThemeHandler = () => {
    setDark(!dark);
  };

  const style = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  };

  return (
    <div>
      <h2>section: useMemo</h2>
      <input
        type="number"
        onChange={changeHandler}
        // value = {number}
      />
      <button onClick={changeThemeHandler}>change theme</button>
      <p style={style}>{doubleNumber}</p>
    </div>
  );
}

function slowFunction(num) {
  console.log("func run");
  for (let i = 0; i < 1000; i++) {
    return num * 2;
  }
}

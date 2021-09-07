import React, { useState } from "react";

export default function Inputfunc() {
  const [value, changeValue] = useState("");

  const changeHandler = (e) => {
    changeValue(e.target.value);
  };

  return (
    <div>
      example2 fucntion:
      <input onChange={changeHandler} />
      {value}
    </div>
  );
}

import React, { useState } from "react";
import ComponentFunc from "./ComponentFunc";

// 1.create a context
export const TextContext = React.createContext();

export default function UseContextDemo() {
  const [isClick, setClick] = useState(false);

  const handleButton = () => {
    setClick(!isClick);
  };

  const getItem = () => {
    return {
      isClick,
      text: "test text"
    };
  };

  return (
    <div>
      {/* <TextContext.Provider value = {isClick}> */}
      {/* 存多个数据 */}
      <TextContext.Provider value={getItem()}>
        <button onClick={handleButton}>{isClick ? "on" : "off"}</button>
        <hr />
        <ComponentFunc />
      </TextContext.Provider>
    </div>
  );
}

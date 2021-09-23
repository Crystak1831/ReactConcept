import React, { useContext } from "react";
import { TextContext } from "./useContextDemo";

export default function ComponentFunc(props) {
  // const isClick = useContext(TextContext)
  // 多个数据
  const data = useContext(TextContext);

  const handleStyle = (isClick) => {
    return {
      backgroundColor: isClick ? "black" : "white",
      color: isClick ? "white" : "black"
    };
  };

  return (
    <div style={handleStyle(data.isClick)}>
      <p>light is :{data.isClick ? "on" : "off"}</p>
      <p>{data.text}</p>
    </div>
  );
}

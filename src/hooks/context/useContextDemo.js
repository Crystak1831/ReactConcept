import React, { useState } from "react";

export default function UseContextDemo() {
  const [isClick, setClick] = useState(false);

  const handleButton = () => {};

  return (
    <div>
      <button onClick={handleButton}></button>
    </div>
  );
}

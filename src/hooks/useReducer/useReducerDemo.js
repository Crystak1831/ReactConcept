import React, { useState, useReducer } from "react";

const ACTIONS = {
  ADD: "ADD"
};

function hooksReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      // 一定要copy
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
}

export default function UseReducerDemo() {
  const [count1, setCount] = useState(0);
  const [state, dispatch] = useReducer(hooksReducer, {
    counter: 0,
    text: "test"
  });
  const addHandler = () => {
    setCount(count1 + 1);
  };

  const HandleAdd = () => {
    dispatch({ type: ACTIONS.ADD });
  };
  return (
    <div>
      useState:
      <p>{count1}</p>
      <button onClick={addHandler}>add</button>
      <hr />
      useReducer:
      <p>
        {state.counter}
        {state.text}
      </p>
      <button onClick={HandleAdd}>add</button>
    </div>
  );
}

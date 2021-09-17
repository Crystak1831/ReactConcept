import { useState, useEffect } from "react";

export default function UseCallbackDemo() {
  const [number, setNumber] = useState(0);

  const getItem = (increment) => {
    return [number + increment, number + 1 + increment, number + 2 + increment];
  };

  const changHandler = (e) => {
    setNumber(parseInt(e.target.value));
  };
  return (
    <div>
      <input type="number" onChange={changHandler} value={number} />
      <button>change theme</button>
      <List getItem={getItem} />
    </div>
  );
}

// const List = ({getItem}) =>{return...} 等同于下列写法
const List = (props) => {
  const { getItem } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItem(5));
  }, [getItem]);

  return items.map((item) => <p key={item}>{item}</p>);
};

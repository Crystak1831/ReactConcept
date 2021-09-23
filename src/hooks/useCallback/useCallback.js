import { useState, useEffect, useCallback } from "react";

export default function UseCallbackDemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const HandleChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  //run getItem when number changed:useCallback
  const getItem = useCallback(
    (increacement) => {
      console.log("run list");
      let arr = [
        number + increacement,
        number + 1 + increacement,
        number + 2 + increacement
      ];
      return arr;
    },
    [number]
  );

  const style = {
    backgroundColor: dark ? "black" : "",
    color: dark ? "white" : "black"
  };

  const HandleTheme = () => {
    setDark(!dark);
  };

  return (
    <div style={style}>
      <input type="number" value={number} onChange={HandleChange} />
      <button onClick={HandleTheme}>changeStylr</button>
      <List getItem={getItem} />
    </div>
  );
}

// const List = ({getItem}) =>{return...} 等同于下列写法
const List = (props) => {
  const { getItem } = props;
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(getItem(5));
  }, [getItem]);

  return (
    <div>
      <ul>
        {list.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

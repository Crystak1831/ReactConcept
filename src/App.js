import "./styles.css";

// useState:
// import ClickClass from "./hooks/useState/useStateClass";
// import Clickfunc from "./hooks/useState/useStateFunc";
// import Inputclass from "./hooks/useState/useStateClass2";
// import InputFunc from "./hooks/useState/useStateFunc2";

// useEffect
import UseEffectClass from "./hooks/useEffect/useEffectClass";
import UseEffectFun from "./hooks/useEffect/useEffectFun";

export default function App() {
  return (
    <div className="App">
      {/* useState: */}
      {/* <ClickClass />
      <Clickfunc />
      <Inputclass />
      <InputFunc /> */}

      {/* useEffect */}
      <UseEffectClass />
      <UseEffectFun />
    </div>
  );
}

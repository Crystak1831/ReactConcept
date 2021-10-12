import React from "react";
import "./styles.css";
import { createStore } from "redux";

export default function App() {
  return (
    <div className="App">
      {/* <Counter1/> */}
      <Counter2 />
    </div>
  );
}

// --------------pure react version--------------
class Counter1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  addHandler = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div onClick={this.addHandler}>pure-react counter:{this.state.count}</div>
    );
  }
}

//-------------pure redux version-----------------

const initialState = {
  count: 0
};

//reducer:function
const reducer = (state = initialState, action) => {
  // console.log(state,action)
  switch (action.type) {
    case "ADD_ONE":
      return {
        ...state,
        count: state.count + 1
      };
    case "ADD_STEPS":
      return {
        ...state,
        count: state.count + action.step
      };
    default:
      return state;
  }
};

//step1:create a store
const store = createStore(reducer);

class Counter2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState());
      console.log("store data got changed", store.getState());
    });
  }

  addHandler = () => {
    //method1:create action:
    // const action ={
    //   //type is a neccessary
    //   type: "ADD_ONE"
    // }

    // store.dispatch(action)

    //Method2:action creator:function-->return action
    // store.dispatch(this.addOne())

    // or if we want to add Steps
    store.dispatch(this.addSteps(10));
  };

  addOne = () => {
    return {
      type: "ADD_ONE"
    };
  };

  addSteps = (step) => {
    return {
      type: "ADD_STEPS",
      step
    };
  };

  render() {
    return (
      <div onClick={this.addHandler}>pure-react counter:{this.state.count}</div>
    );
  }
}

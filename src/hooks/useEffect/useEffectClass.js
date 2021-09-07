import React from "react";

export default class UseEffectClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }
  addHandler = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  componentDidMount() {
    document.title = `you clicked ${this.state.number} times`;
  }

  componentDidUpdate() {
    document.title = `you clicked${this.state.number} times`;
  }

  render() {
    const myStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    return (
      <div style={myStyle}>
        you click {this.state.number} times
        <button onClick={this.addHandler}>click</button>
      </div>
    );
  }
}

import React from "react";

// class component:
export default class Clickclass extends React.Component {
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
    console.log("helo");
    // this.addHandler(number);
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

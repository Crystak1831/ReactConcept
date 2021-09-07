import React from "react";

// class component:
export default class Inpurclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  inputHandler = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div>
        example2 class:
        <input value="hello" placeholder="hello" onChange={this.inputHandler} />
        {this.state.value}
      </div>
    );
  }
}

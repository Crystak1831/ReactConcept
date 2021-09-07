import React from "react";

export default class TimerClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    // console.log("componentDidmount woirking");
    this.timer = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 1000);
  }

  //一般设置了计时器就要清除，用componentWillUnmont
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div>auto count: {this.state.counter}</div>;
  }
}

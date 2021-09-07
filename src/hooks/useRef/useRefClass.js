import React from "react";

export default class UseRefClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state ={
    //   value:''
    // }
    this.myRef = React.createRef();
    this.myRef2 = React.createRef();
  }

  // changeHandler = (e) =>{
  //   this.setState({
  //     value:e.target.value
  //   })
  // }
  componentDidMount() {
    this.myRef2.current.value = "hello";
    this.myRef2.current.focus();
  }
  clickHandler = () => {
    //从current里拿ref的值
    alert(this.myRef.current.value);
  };

  render() {
    return (
      <div>
        ex1:
        <input type="text" ref={this.myRef} />
        <button onClick={this.clickHandler}>click</button>
        ex2:
        <input type="text" ref={this.myRef2} />
      </div>
    );
  }
}

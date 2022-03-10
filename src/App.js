import React, { Component, useState } from "react";
import { Wrapper } from "./components/Wrapper";
import Title from "./components/Title";
import Count from "./components/Count";
import "./App.css";

class App extends Component {
  state = {
    CountNum: 0,
  };

  setCountNum = (val) => {
    this.setState({ CountNum: val });
  };

  hourCheck = () => {
    let hourCount = new Date().getHours();

    if (hourCount >= 9 && hourCount <= 17) {
      this.setState({ CountNum: this.state.CountNum + 1 });
    } else if (hourCount <= 8) {
      this.setState({ CountNum: this.state.CountNum - 1 });
    } else if (hourCount >= 18) {
      this.setState({ CountNum: this.state.CountNum - 1 });
    }
  };

  render() {
    return (
      <Wrapper setCountNum={this.setCountNum} CountNum={this.state.CountNum}>
        <Title>Click Counter</Title>
        <Title>Count:</Title>
        <Count>{this.state.CountNum}</Count>
      </Wrapper>
    );
  }

  componentDidMount() {
    setInterval(this.hourCheck, [3600000]);
  }
}

export default App;

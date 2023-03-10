import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0
  };
  Add = () => {
    if (this.state.count < 10) {
      this.setState({
        count: this.state.count + 1
      });
    }
  };
  Remove = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.Add}>+</button>
        <button onClick={this.Remove}>-</button>
      </div>
    );
  }
}

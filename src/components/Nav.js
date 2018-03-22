import React, { Component } from "react";

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      color: "black"
    };
  }

  greeting = () => {
    const { toggle } = this.state;

    if (toggle) {
      return <h1 className="nav-item">Welcome Back!</h1>;
    }
    return <h1 className="nav-item">Please sign in → </h1>;
  };

  toggleState = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  changeColor = () => {
    var color = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    this.setState({ color });
  };

  render() {
    return (
      <div
        style={{ background: this.state.color, fontSize: 16 }}
        className="nav"
      >
        {this.greeting()}
        <input
          type="button"
          className="button"
          value={this.state.toggle === true ? "Sign Out" : "Sign In"}
          onClick={this.toggleState}
        />
        <div>
          <button
            style={{ fontSize: 16, borderRadius: 4, marginRight: 20 }}
            onClick={this.changeColor}
          >
            Change Color
          </button>
          <input
            type="text"
            placeholder="Enter color"
            value={this.state.color}
            onChange={e => this.setState({ color: e.target.value })}
          />
        </div>
      </div>
    );
  }
}

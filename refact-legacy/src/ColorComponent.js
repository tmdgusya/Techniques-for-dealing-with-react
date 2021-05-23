import React from "react";

export class ColorComponent extends React.Component {
  state = {
    color: "red",
  };
  onClick = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <button style={{ background: this.state.color }} onClick={this.onClick}>
        좋아요
      </button>
    );
  }
}

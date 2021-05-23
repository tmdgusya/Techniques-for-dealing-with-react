import React from "react";

export class ColorComponent extends React.Component {
  state = {
    color: "red",
    count: 0,
  };
  // batch 처리로 인한 일괄 처리
  // prevState 를 이용하면 자신이 호출되기 전 직전의 상태값을 받아오므로 정상적으로 2가 증가한다.
  onClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    this.setState((prevState) => ({
      count: prevState.count + 1,
      color: "blue",
    }));
  };
  render() {
    return (
      <div>
        <button style={{ background: this.state.color }} onClick={this.onClick}>
          좋아요
        </button>
        <p>Count 개수 {this.state.count}</p>
      </div>
    );
  }
}

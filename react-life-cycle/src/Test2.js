import React from "react";

export class TestTwo extends React.Component {
  state = {
    items: [],
  };

  divRef = React.createRef();

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { items } = this.state;
    if (prevState.items.length < items.length) {
      const rect = this.divRef.current.getBoundingClientRect();
      return rect.height;
    }
    return null;
  }

  // snapshot 은 getSnapshotBeforeUpdate 의 result
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const rect = this.divRef.current.getBoundingClientRect();
      if (rect.height !== snapshot) {
        alert("새로운 줄이 추가되었습니다.");
      }
    }
  }

  onClick = () => {
    const { items } = this.state;
    this.setState({ items: [...items, "아이템"] });
  };

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <button onClick={this.onClick}>추가하기</button>
        <ul ref={this.divRef} style={{ width: "100%" }}>
          {items.map((item) => (
            <li style={{ height: 50 }}>{item}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

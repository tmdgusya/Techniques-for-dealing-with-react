import React from "react";

export class Box extends React.Component {
  state = {
    boxwitdh: 0,
  };
  divRef = React.createRef();

  componentDidMount() {
    console.log("Did Mount");
    const rect = this.divRef.current.getBoundingClientRect();
    this.setState({ boxwitdh: rect.width });
  }

  // 성능 개선을 위해 사용가능함.
  shouldComponentUpdate() {
    console.log("Should Update");
    return true;
  }

  render() {
    console.log("Render");
    const { boxwitdh } = this.state;
    const backgroundColor = boxwitdh < 400 ? "red" : "blue";

    return (
      <div
        ref={this.divRef}
        style={{ width: "100%", height: "100px", backgroundColor }}
      >
        box
      </div>
    );
  }
}

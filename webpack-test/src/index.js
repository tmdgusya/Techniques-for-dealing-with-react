import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";

function Container() {
  return React.createElement(
    "div",
    null,
    React.createElement("p", null, "버튼을 클릭해 주세요."),
    React.createElement(Button, { label: "좋아요" }),
    React.createElement(Button, { label: "싫어요" })
  );
}

ReactDOM.render(
  React.createElement(Container),
  document.querySelector("#react-root")
);

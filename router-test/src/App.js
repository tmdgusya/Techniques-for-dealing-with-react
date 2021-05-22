import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    pageName: "",
  };

  componentDidMount() {
    window.onpopstate = (event) => {
      this.onChagePage(event.state);
    };
  }

  onChagePage = (pageName) => {
    this.setState({ pageName });
  };

  onClick1 = () => {
    const pageName = "page1";
    window.history.pushState(pageName, "", "/page1");
    this.onChagePage(pageName);
  };

  onClick2 = () => {
    const pageName = "page2";
    window.history.pushState(pageName, "", "/page2");
    this.onChagePage(pageName);
  };

  render() {
    const { pageName } = this.state;
    return (
      <div>
        <button onClick={this.onClick1}>page1</button>
        <button onClick={this.onClick2}>page2</button>
        {!pageName && <Home />}
        {pageName === "page1" && <Page1 />}
        {pageName === "page2" && <Page2 />}
      </div>
    );
  }
}

function Home() {
  return <h2>HomePage</h2>;
}

function Page1() {
  return <h2>Page1</h2>;
}

function Page2() {
  return <h2>Page2</h2>;
}

export default App;

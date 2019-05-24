import React, { Component } from "react";
import "./App.css";
import GlobalStyles from "./components/globals/GlobalStyles";
import Home from "./pages/Home";
export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <h1>Here's a heading</h1>
        <Home />
      </>
    );
  }
}

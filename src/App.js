import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/MainPage/NavBar";
import Header from "./components/MainPage/Header";
import Main from "./components//MainPage/Main";
class App extends Component {
  //state here
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;

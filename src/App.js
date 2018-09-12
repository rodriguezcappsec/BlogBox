import React, { Component } from "react";
import NavBar from "./components/MainPage/NavBar";
import Header from "./components/MainPage/Header";
import Main from "./components//MainPage/Main";
import { GraphQLSchema } from "graphql";
class App extends Component {
  //state here
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header />

        {/* <SubHeader /> */}
        <Main>{/* Main Content Here */}</Main>
      </React.Fragment>
    );
  }
}

export default App;

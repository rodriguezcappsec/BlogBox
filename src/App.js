import React, { Component } from "react";
import NavBar from "./components/MainPage/NavBar";
import Header from "./components/MainPage/Header";
import Main from "./components//MainPage/Main";
import utilities from "./utils/auth";
import logInAlert from "./utils/validationAlerts";
import swal from "sweetalert2";

class App extends Component {
  //state here
  async componentDidMount() {
    let test = new utilities.Authentication("test@test.com", "11");
    test.logIn().then(data => console.log(data));
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header />
        <Main>{/* Main Content Here */}</Main>
      </React.Fragment>
    );
  }
}

export default App;

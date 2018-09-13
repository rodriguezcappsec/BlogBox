import React, { Component } from "react";
import NavBar from "./components/MainPage/NavBar";
import Header from "./components/MainPage/Header";
import Main from "./components//MainPage/Main";
import utilities from "./utils/authApi";
import logInAlert from "./utils/validationAlerts";
import swal from "sweetalert2";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: ""
    };
  }
  async componentDidMount() {
    //testing authentication
    let test = new utilities.Authentication("testing@test.com", "111");
    let data = await test.logIn();
    this.setState({ userToken: data.token });
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

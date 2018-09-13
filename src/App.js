import React, { Component } from "react";
import NavBar from "./components/MainPage/NavBar";
import Header from "./components/MainPage/Header";
import Main from "./components//MainPage/Main";
import Authenticate from "./utils/authApi";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }
  async componentDidMount() {
    //testing authentication
    let test = new Authenticate({ email: "test@test.com", password: "11" });
    let data = await test.logIn();
    this.setState({ user: data });
    console.log(this.state.user);
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

import React, { Component } from "react";
import NavBar from "./components/MainPage/NavBar";
import Header from "./components/MainPage/Header";
import Main from "./components//MainPage/Main";
import Authenticate from "./utils/authApi";
import blogService from "./utils/blogApi";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      key: ""
    };
  }
  async componentDidMount() {
    //testing authentication
    let test = new Authenticate({ email: "test@test.com", password: "11" });
    let data = await test.logIn();
    this.setState({ user: data });
    this.setState({ key: localStorage.getItem(process.env.MY_TOKEN_KEY) });
    let _blogs = await blogService.delete("5b9ac9fbcb08493f58f25f8d");
    console.log(_blogs);
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

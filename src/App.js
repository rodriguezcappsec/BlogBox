import React, { Component } from "react";
import NavBar from "./components/MainPage/NavBar";
import Header from "./components/MainPage/Header";
import Main from "./components//MainPage/Main";
import Authenticate from "./services/authService";
// import blogService from "./services/blogService";
import commentService from "./services/commentService";
import favoriteService from "./services/favoriteService";
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
    let test = new Authenticate({ email: "testing@test.com", password: "111" });
    let data = await test.logIn();
    this.setState({ user: data });
    this.setState({ key: localStorage.getItem(process.env.MY_TOKEN_KEY) });
    let favorites = await favoriteService.delete("5b9ac98ccb08493f58f25f8c");
    console.log(favorites);
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

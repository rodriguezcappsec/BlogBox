import React, { Component } from "react";
import NavBar from "./components/MainPage/NavBar";
import Header from "./components/MainPage/Header";
import Main from "./components//MainPage/Main";
import Authenticate from "./services/authService";
// import blogService from "./services/blogService";
import commentService from "./services/commentService";
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
    let comment = await commentService.create({
      comment: {
        name: "Luis",
        email: "test@gmail.com",
        body: "Heyyy dime a ve manin, como estas?",
        blogID: "5b9714190c977b3f449eb69b"
      }
    });
    console.log(comment);

    // let blogs = await blogService.update("5b9ac98ccb08493f58f25f8c", {
    //   blog: {
    //     title: "WHAT THE KLK",
    //     image: "THE FUCK!!",
    //     article: "new article",
    //     likes: 3,
    //     topic: "Programming"
    //   }
    // });
    // console.log(blogs);
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

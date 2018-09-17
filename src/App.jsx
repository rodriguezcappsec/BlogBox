import React, { Component } from "react";
import NavBar from "./components/MainPage/NavBar";
import Header from "./components/MainPage/Header";
import Main from "./components/MainPage/Main";
import BlogsGrid from "./components/Blog/BlogsGrid";
import blogSerivce from "./services/blogService";
import { Switch, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import jwt from "jsonwebtoken";
import AuthModal from "./components/Modal/AuthModal";
import Authentication from "./services/authService";

const LocalStorageProvider = React.createContext();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      blogs: [],
      loged: false,
      "sign-in": {
        email: "",
        password: ""
      },
      "sign-up": {
        userName: "",
        avatar: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  }
  getLocalStorage = () => {
    return localStorage.getItem(process.env.REACT_APP_MY_TOKEN_KEY);
  };
  blogs = () => {
    blogSerivce.find().then(blogs => {
      this.setState({ blogs: blogs });
    });
  };
  onLogIn = () => {
    if (this.getLocalStorage()) {
      this.setState({ loged: true });
      this.blogs();
      return;
    }
    this.blogs();
  };
  componentDidMount = () => {
    // const authenticate = new Authentication({
    //   email: "lasnoches@test.com",
    //   password: "111"
    // });
    // authenticate.logIn().then(() => {
    //   this.onLogIn();
    //   const token = jwt.verify(
    //     localStorage.getItem(process.env.REACT_APP_MY_TOKEN_KEY),
    //     process.env.REACT_APP_DECODE_TOKEN
    //   );
    //   console.log(token);
    // });
    this.onLogIn();
  };
  render() {
    return (
      <React.Fragment>
        <NavBar loged={this.state.loged} />
        <Header loged={this.state.loged} />
        <Main>
          <Switch>
            <Route
              exact
              name="blog"
              path="/blog/:id"
              render={props => (
                <Blog
                  {...props}
                  user={this.state.user}
                  loged={this.state.loged}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={props => (
                <BlogsGrid
                  {...props}
                  blogs={this.state.blogs}
                  loged={this.state.loged}
                />
              )}
            />
          </Switch>
        </Main>
        <AuthModal />
      </React.Fragment>
    );
  }
}

export default App;

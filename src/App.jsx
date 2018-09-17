import React, { Component } from "react";
import NavBar from "./components/MainPage/NavBar";
import Header from "./components/MainPage/Header";
import Main from "./components/MainPage/Main";
import BlogsGrid from "./components/Blog/BlogsGrid";
import blogSerivce from "./services/blogService";
import { Switch, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import jwt from "jsonwebtoken";

import Authentication from "./services/authService";

const LocalStorageProvider = React.createContext();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      blogs: [],
      loged: false
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
    const authenticate = new Authentication({
      email: "lasnoches@test.com",
      password: "111"
    });
    authenticate.logIn().then(() => {
      this.onLogIn();
      const token = jwt.verify(
        localStorage.getItem(process.env.REACT_APP_MY_TOKEN_KEY),
        process.env.REACT_APP_DECODE_TOKEN
      );
      console.log(token);
    });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header />
        <Main>
          <Switch>
            <Route
              exact
              name="blog"
              path="/blog/:id"
              render={props => (
                <LocalStorageProvider.Consumer>
                  {contet => (
                    <Blog
                      {...props}
                      user={this.state.user}
                      loged={this.state.loged}
                    />
                  )}
                </LocalStorageProvider.Consumer>
              )}
            />

            <Route
              exact
              path="/"
              render={props => (
                <LocalStorageProvider.Consumer>
                  {contet => (
                    <BlogsGrid
                      {...props}
                      blogs={this.state.blogs}
                      loged={this.state.loged}
                      aja={contet}
                    />
                  )}
                </LocalStorageProvider.Consumer>
              )}
            />
          </Switch>
        </Main>
      </React.Fragment>
    );
  }
}

export default App;

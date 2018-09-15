import React, { Component } from "react";
import NavBar from "./components/MainPage/NavBar";
import Header from "./components/MainPage/Header";
import Main from "./components/MainPage/Main";
import BlogsGrid from "./components/Blog/BlogsGrid";
import blogSerivce from "./services/blogService";
import { Switch, Route, Redirect } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Login from "./services/authService";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      blogs: []
    };
  }
  blogs = () => {
    blogSerivce.find().then(blogs => {
      this.setState({ blogs: blogs });
    });
  };
  componentDidMount() {

  }
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
              path="/blog"
              render={props => <Blog {...props} user={this.state.user} />}
            />

            <Route
              exact
              path="/"
              render={props => (
                <BlogsGrid {...props} blogs={this.state.blogs} />
              )}
            />
          </Switch>
        </Main>
      </React.Fragment>
    );
  }
}

export default App;

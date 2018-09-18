import React, { Component } from "react";
import NavBar from "./components/MainPage/NavBar";
import Header from "./components/MainPage/Header";
import Main from "./components/MainPage/Main";
import BlogsGrid from "./components/Blog/BlogsGrid";
import blogSerivce from "./services/blogService";
import { Switch, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import AuthModal from "./components/Modal/AuthModal";
import Authentication from "./services/authService";
import getFormFields from "./utils/getFormField";
import { TOKEN, DECODE_TOKEN } from "./utils/constants";
import jwt from "jsonwebtoken";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      blogs: [],
      loged: false,
      signIn: {
        email: "",
        password: ""
      },
      register: {
        userName: "",
        avatar: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
    this.getFormFields = getFormFields.bind(this);
  }

  blogs = () => {
    blogSerivce.find().then(blogs => {
      this.setState({ blogs: blogs });
    });
  };
  onSignedUp = () => {
    if (TOKEN()) {
      this.setState({ user: DECODE_TOKEN() });
      console.log(this.state.user);
      this.setState({ loged: true }, () => {
        this.blogs();
      });
      return;
    }
    this.blogs();
  };
  handleLogin = e => {
    e.preventDefault();
    const authenticate = new Authentication(this.state.signIn);
    authenticate.logIn().then(() => {
      document.getElementById("close-modal").click();
      console.log(this.state.user);
      this.onSignedUp();
    });
  };
  handleLogOut = (e) => {
    e.preventDefault();
    const signOut = new Authentication();
    signOut.logOut().then(() => {
      this.setState({ user: "" });
      this.setState({ loged: false });
      this.onSignedUp();
    });
  };
  componentDidMount = () => {
    this.onSignedUp();
  };

  render() {
    return (
      <React.Fragment>
        <NavBar loged={this.state.loged} signOut={this.handleLogOut} />
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
        <AuthModal getField={this.getFormFields} onLogedIn={this.handleLogin} />
      </React.Fragment>
    );
  }
}

export default App;

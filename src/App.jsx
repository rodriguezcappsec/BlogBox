import React, { Component } from "react";
import NavBar from "./components/MainPage/NavBar";
import Header from "./components/MainPage/Header";
import Main from "./components/MainPage/Main";
import BlogsGrid from "./components/Blog/BlogsGrid";
import blogService from "./services/blogService";
import { Switch, Route, Redirect } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import AuthModal from "./components/Modal/AuthModal";
import ChangePassModal from "./components/Modal/ChangePasswordModal";
import CreateBlogModal from "./components/Modal/CreateBlogModal";
import Authentication from "./services/authService";
import getFormFields from "./utils/getFormField";
import { TOKEN, DECODE_TOKEN } from "./utils/constants";
import imageUpload from "./services/imageUpload";
import MyProfile from "./components/Profile/MyProfile";
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
      },
      changePassword: {
        old: "",
        new: ""
      },
      newBlog: {
        title: "",
        image: "",
        likes: 0,
        article: "",
        topic: ""
      }
    };
    this.getFormFields = getFormFields.bind(this);
  }

  //Getting all the blogs
  blogs = optional => {
    blogService.find().then(blogs => {
      this.setState({ blogs: blogs });
    });
  };

  //Determines if the user is authenticated
  onSignedUp = () => {
    if (TOKEN()) {
      this.setState({ user: DECODE_TOKEN() });
      this.setState({ loged: true });
    }
  };

  // Handle user authentication login in the user
  handleLogin = e => {
    e.preventDefault();
    const authenticate = new Authentication(this.state.signIn);
    authenticate.logIn().then(() => {
      document.getElementById("close-modal").click();
      this.onSignedUp();
    });
  };
  handleNewBlog = e => {
    e.preventDefault();
    imageUpload(this.state.newBlog.image)
      .then(image => {
        blogService
          .create({
            blog: {
              title: this.state.newBlog.title,
              image: image.data.secure_url,
              likes: 0,
              article: this.state.newBlog.article,
              topic: this.state.newBlog.topic
            }
          })
          .then(data => {
            console.log(data);
            document.getElementById("newBlog-close-modal").click();
            this.blogs();
          });
      })
      .catch(err => console.error(err));
  };
  //Change user password
  handleChangePassword = e => {
    e.preventDefault();
    const authenticate = new Authentication({
      old: this.state.changePassword.old,
      new: this.state.changePassword.new
    });
    authenticate.changePassword().then(() => {
      document.getElementById("changePass-close-modal").click();
    });
  };
  //Register user
  handleRegister = e => {
    e.preventDefault();
    imageUpload(this.state.register.avatar)
      .then(image => {
        let authenticate = new Authentication({
          userName: this.state.register.userName,
          avatar: image.data.secure_url,
          email: this.state.register.email,
          password: this.state.register.password,
          password_confirmation: this.state.register.password_confirmation
        });
        authenticate.register().then(() => {
          const autoLogin = new Authentication({
            email: this.state.register.email,
            password: this.state.register.password
          });
          autoLogin.logIn().then(() => {
            this.onSignedUp();
          });
          document.getElementById("close-modal").click();
        });
      })
      .catch(err => console.error(err));
  };

  // Logs out the user
  handleLogOut = e => {
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
    this.blogs();
    return (
      <React.Fragment>
        <NavBar
          loged={this.state.loged}
          signOut={this.handleLogOut}
          userInfo={this.state.user}
          onShow={this.changePassModalShow}
        />
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
            {TOKEN() ? (
              <Route
                exact
                path="/my-profile"
                render={props => (
                  <MyProfile
                    {...props}
                    user={this.state.user}
                    updateMainState={this.blogs}
                  />
                )}
              />
            ) : (
              <Redirect to="/" />
            )}
          </Switch>
        </Main>
        <AuthModal
          getField={this.getFormFields}
          onLogedIn={this.handleLogin}
          onRegister={this.handleRegister}
        />
        <ChangePassModal
          getField={this.getFormFields}
          onChangePassword={this.handleChangePassword}
        />
        <CreateBlogModal
          getField={this.getFormFields}
          onNewBlog={this.handleNewBlog}
        />
      </React.Fragment>
    );
  }
}

export default App;

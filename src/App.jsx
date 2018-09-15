import React, { Component } from "react";
import NavBar from "./components/MainPage/NavBar";
import Header from "./components/MainPage/Header";
import Main from "./components/MainPage/Main";
import Auth from "./services/authService";
import Axios from "axios";
import blogService from "./services/blogService";
import upload from "./services/imageUpload";
import Cloud from "cloudinary";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      key: "",
      upload: "",
      image: ""
    };
  }
  async componentDidMount() {
    const log = new Auth({ email: "testing@test.com", password: "111" });
    const a = await log.logIn();
    console.log(a);
    // blogService.create({
    //   blog: {
    //     title: "no desuu",
    //     image: imageUpload,
    //     article: "new article",
    //     likes: 3,
    //     topic: "Programming"
    //   }
    // });
  }
  handleImage = async e => {
    let state = e.target.files[0];
    console.log(state);
    this.setState({ upload: state }, async () => {
      let a = await upload(this.state.upload);
      console.log(a.data);
      this.setState({ image: a.data.secure_url });
      console.log(this.state.image);
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header />
        <Main>
          <input type="file" onChange={this.handleImage} />
          <button onClick={this.upload}>upload</button>
        </Main>
      </React.Fragment>
    );
  }
}

export default App;

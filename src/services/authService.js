import Axios from "axios";
import swal from "sweetalert2";
import endPoints from "./endPoints";
// require("dotenv").config()
//Authentication class
class Authenticate {
  constructor(authenticate = {}) {
    this.credentials = {
      login: {
        credentials: {
          email: authenticate.email || "",
          password: authenticate.password || ""
        }
      },
      register: {
        credentials: {
          userName: authenticate.userName || "",
          email: authenticate.email || "",
          avatar: authenticate.avatar || "",
          password: authenticate.password || "",
          password_confirmation: authenticate.password_confirmation || ""
        }
      },
      changePassword: {
        passwords: { old: authenticate.old || "", new: authenticate.new || "" }
      }
    };
    this.token = {
      headers: {
        Authorization:
          "Bearer " +
            localStorage.getItem(process.env.REACT_APP_MY_TOKEN_KEY) || ""
      }
    };
  }
  logIn = async () => {
    let helper = await Axios.post(
      endPoints.authUrls.logIn,
      this.credentials.login
    ).catch(() => {
      swal({
        type: "error",
        title: "Oops...",
        text: "Login failed please try again"
      });
      return;
    });
    if (helper) {
      localStorage.setItem(
        process.env.REACT_APP_MY_TOKEN_KEY,
        helper.data.user.token
      );
      swal({
        type: "success",
        title: "Signed in successfully",
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000
      });
      return helper.data.user;
    }
  };
  register = async () => {
    console.log(this.credentials.register)
    let helper = await Axios.post(
      endPoints.authUrls.register,
      this.credentials.register
    ).catch(() =>
      swal({
        type: "error",
        title: "Oops...Error trying to register",
        text: "Please check your fields"
      })
    );
    if (helper) {
      return helper.data.user;
    }
  };
  changePassword = async () => {
    let helper = await Axios.patch(
      endPoints.authUrls.changePassword,
      this.credentials.changePassword,
      this.token
    ).catch(err => {
      swal({
        type: "error",
        title: "Oops...Error trying to change password",
        text: "Please check your fields"
      });
    });
    if (helper) {
      swal({
        type: "success",
        title: "Great!!!",
        text: "Password successfully changed!"
      });
      return helper.data.user;
    }
  };
  logOut = async () => {
    swal({
      type: "success",
      title: "You sign out",
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000
    });
    return localStorage.removeItem(process.env.REACT_APP_MY_TOKEN_KEY);
  };
}

export default Authenticate;

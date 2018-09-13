import Axios from "axios";
import swal from "sweetalert2";
import endPoints from "./endPoints";
require("dotenv");
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
          password: authenticate.password || "",
          password_confirmation: authenticate.password_confirmation || ""
        }
      },
      changePassword: {
        passwords: {
          passwords: {
            old: authenticate.old || "",
            new: authenticate.new || ""
          }
        }
      }
    };
    this.token = {
      token: {
        headers: { Authorization: "Bearer " + authenticate.token || "" }
      }
    };
  }
  logIn = async () => {
    let helper = await Axios.post(
      endPoints.authUrls.logIn,
      this.credentials.login
    ).catch(() =>
      swal({
        type: "error",
        title: "Oops...",
        text: "Login failed please try again"
      })
    );
    if (helper) {
      swal({
        type: "success",
        title: "Signed in successfully",
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000
      });
      localStorage.setItem(process.env.MY_TOKEN_KEY, helper.data.user.token);
      return helper.data.user;
    }
  };
  register = async () => {
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
      swal({
        type: "success",
        title: "Great!!!",
        text: "Account successfully created!"
      });
      return helper.data.user;
    }
  };
  changePassword = async () => {
    let helper = await Axios.patch(
      endPoints.authUrls.changePassword,
      this.credentials.changePassword.passwords,
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
        text: "Account successfully created!"
      });
      return helper.data.user;
    }
  };
  logOut = async () => {
    await Axios.delete(endPoints.authUrls.logOut, this.token).catch(err => {
      swal({
        type: "error",
        title: "Oops...Error trying to log out",
        text: "Please try again"
      });
    });
  };
}

export default Authenticate;

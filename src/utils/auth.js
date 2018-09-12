import Axios from "axios";
import swal from "sweetalert2";

let apiUrl = "";
window.location.hostname === "localhost"
  ? (apiUrl = "http://localhost:4741")
  : (apiUrl = "BACKEND DEPLOYMENT END POINT HERE");

let authEndPoints = {
  logIn: apiUrl + "/sign-in",
  changePassword: apiUrl + "/change-password",
  register: apiUrl + "/sign-up",
  logOut: apiUrl + "/sign-out"
};

class Authenticate {
  constructor(email, password, password_confirmation = "", userName = "") {
    this.credentials = {
      login: {
        credentials: {
          email: email,
          password: password
        }
      },
      register: {
        credentials: {
          userName: userName,
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }
      }
    };
  }
  async logIn() {
    let helper = await Axios.post(
      authEndPoints.logIn,
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
        title: "Signed in successfull",
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000
      });
      return helper.data.user;
    }
    return helper.data.user;
  }
  async register() {
    let helper = await Axios.post(
      authEndPoints.register,
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
        text: "Account successfuly created!"
      });
      return helper.data.user;
    }
  }
}

export default {
  Authentication: Authenticate
};

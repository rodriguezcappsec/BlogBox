import Axios from "axios";
import swal from "sweetalert2";
import authUrls from "./endPoints";
//Authentication class
class Authenticate {
  constructor(
    email,
    password,
    password_confirmation = "",
    userName = "",
    changePassword = {},
    token
  ) {
    this.credentials = {
      login: { credentials: { email: email, password: password } },
      register: {
        credentials: {
          userName: userName,
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }
      },
      changePassword: {
        token: {
          headers: {
            Authorization: "Bearer " + token
          }
        },
        passwords: {
          passwords: {
            old: changePassword.old,
            new: changePassword.new
          }
        }
      }
    };
    this.logOut = token;
  }
  logIn = async () => {
    let helper = await Axios.post(authUrls.logIn, this.credentials.login).catch(
      () =>
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
  };
  register = async () => {
    let helper = await Axios.post(
      authUrls.register,
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
  };
  changePassword = async () => {
    let helper = await Axios.patch(
      authUrls.changePassword,
      this.credentials.changePassword.passwords,
      this.credentials.changePassword.token
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
        text: "Account successfuly created!"
      });
      return helper.data.user;
    }
  };
  logOut = async () => {
    await Axios.delete(authUrls.logOut, this.logOut).catch(err => {
      swal({
        type: "error",
        title: "Oops...Error trying to log out",
        text: "Please try again"
      });
    });
  };
}

export default {
  Authentication: Authenticate
};

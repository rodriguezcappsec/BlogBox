//condition to set the api url
let apiUrl = "";
window.location.hostname === "localhost"
  ? (apiUrl = "http://localhost:4741")
  : (apiUrl = "BACKEND DEPLOYMENT END POINT HERE");

//user api urls
let authUrls = {
  logIn: apiUrl + "/sign-in",
  changePassword: apiUrl + "/change-password",
  register: apiUrl + "/sign-up",
  logOut: apiUrl + "/sign-out"
};

let blogEndPoint = {
  blog: apiUrl + "/api/blogs"
};

let commetEndPoint;
export default { authUrls, blogEndPoint };

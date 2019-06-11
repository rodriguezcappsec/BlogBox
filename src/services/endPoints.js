//condition to set the api url
let apiUrl = window.location.hostname === "localhost" ? "http://localhost:4741" : "https://fast-wildwood-40490.herokuapp.com"

//user api urls
let authUrls = {
  logIn: apiUrl + "/sign-in",
  changePassword: apiUrl + "/change-password",
  register: apiUrl + "/sign-up",
  logOut: apiUrl + "/sign-out"
};

let blogEndPoint = apiUrl + "/api/blogs";
let commentEndPoint = apiUrl + "/api/comments";
let favoriteEndPoint = apiUrl + "/api/favorites";

export default { authUrls, blogEndPoint, commentEndPoint, favoriteEndPoint };

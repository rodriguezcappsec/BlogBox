import Axios from "axios";
import apiUrls from "./endPoints";
require("dotenv");

// const TOKEN = ;

let post = data => {
  return Axios.post(apiUrls.blogEndPoint.blog, data, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem(process.env.MY_TOKEN_KEY)
    }
  });
};

let get = id => {
  console.log(id);
  let _token =
    id === undefined
      ? ""
      : {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem(process.env.MY_TOKEN_KEY)
          }
        };
  return Axios.get(`${apiUrls.blogEndPoint.blog}/${id}`, _token);
};

let update = (id, data) => {
  return Axios.patch(`${apiUrls.blogEndPoint.blog}/${id}`, data, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem(process.env.MY_TOKEN_KEY)
    }
  });
};

let del = id =>
  Axios.delete(`${apiUrls.blogEndPoint.blog}/${id}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem(process.env.MY_TOKEN_KEY)
    }
  });

export default {
  post,
  get,
  del,
  update
};

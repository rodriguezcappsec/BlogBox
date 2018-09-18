import Axios from "axios";
// require("dotenv").config();

const token = () => localStorage.getItem(process.env.REACT_APP_MY_TOKEN_KEY);

let post = (url, data) => {
  return Axios.post(url, data, {
    headers: {
      Authorization: "Bearer " + token()
    }
  });
};

let get = (url, id) => {
  // let _token =
  //   id === undefined ? "" : { headers: { Authorization: "Bearer " + token() } };
  return Axios.get(`${url}/${id}`);
};

//If for some reason you don't need data to update, pass in an empty {}
let update = (url, id, data) => {
  return Axios.patch(`${url}/${id}`, Object.keys(data).length < 1 ? "" : data, {
    headers: {
      Authorization: "Bearer " + token()
    }
  });
};

let del = (url, id) =>
  Axios.delete(`${url}/${id}`, {
    headers: {
      Authorization: "Bearer " + token()
    }
  });

export default {
  post,
  get,
  del,
  update
};

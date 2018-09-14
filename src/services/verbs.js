import Axios from "axios";
require("dotenv");

const token = () => localStorage.getItem(process.env.MY_TOKEN_KEY);

let post = (url, data) => {
  return Axios.post(url, data, {
    headers: {
      Authorization: "Bearer " + token()
    }
  });
};

let get = (url, id) => {
  let _token =
    id === undefined ? "" : { headers: { Authorization: "Bearer " + token() } };
  return Axios.get(`${url}/${id}`, _token);
};

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

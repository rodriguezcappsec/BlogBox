import Axios from "axios";
import { TOKEN } from "./constants";
let post = (url, data) => {
  return Axios.post(url, data, {
    headers: {
      Authorization: "Bearer " + TOKEN()
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
      Authorization: "Bearer " + TOKEN()
    }
  });
};

let del = (url, id) =>
  Axios.delete(`${url}/${id}`, {
    headers: {
      Authorization: "Bearer " + TOKEN()
    }
  });

export default {
  post,
  get,
  del,
  update
};

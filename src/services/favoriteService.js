import swal from "sweetalert2";
import verbs from "../utils/verbs";
import endPoints from "./endPoints";

const favoriteService = {
  find: async () => {
    let helper = await verbs
      .get(endPoints.favoriteEndPoint, "")
      .catch(err => {});
    if (helper) {
      return helper.data.favorites;
    }
  },
  //leave favorite={} empty, it will construct what it needs in the backend
  create: async blogID => {
    let helper = await verbs
      .post(`${endPoints.favoriteEndPoint}/${blogID}`, {
        favorite: {}
      })
      .catch(err => {
        swal({
          type: "error",
          title: err.response.data,
          toast: true,
          position: "top-end",
          showConfirmButton: true,
          footer:
            "<a href='https://httpstatuses.com/409' target='_blank'>Why do I have this issue?</a>"
        });
      });
    if (helper) {
      swal({
        type: "success",
        title: "Blog Saved!",
        toast: true,
        position: "top-left",
        showConfirmButton: false,
        timer: 3000
      });
      return helper.data.blog;
    }
  },
  //Pass in the id of the blog to be removed
  remove: async blogID => {
    let helper = await verbs
      .update(`${endPoints.favoriteEndPoint}`, `${blogID}`, {})
      .catch(() => {
        swal({
          type: "error",
          title: "could not remove blog from favorites",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000
        });
        return;
      });
    if (helper) {
      swal({
        type: "success",
        title: "Blog removed from favorites!",
        toast: true,
        position: "top-left",
        showConfirmButton: false,
        timer: 3000
      });
      return;
    }
  }
};
export default favoriteService;

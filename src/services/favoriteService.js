import swal from "sweetalert2";
import verbs from "./verbs";
import endPoints from "./endPoints";

const commentService = {
  find: async id => {
    let favoriteID = id === undefined ? "" : id;
    let helper = await verbs
      .get(endPoints.favoriteEndPoint, favoriteID)
      .catch(err => {
        swal({
          type: "error",
          title: "could not get saved blogs",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000
        });
      });
    if (helper) {
      if (id === undefined) {
        return helper.data.favorites;
      } else {
        return helper.data.favorite;
      }
    }
  },
  //leave favorite={} empty, it will construct what it needs in the backend
  create: async (blogID, body = { favorite: {} }) => {
    let helper = await verbs
      .post(`${endPoints.favoriteEndPoint}/${blogID}`, body)
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
  delete: blogID => {
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async result => {
      if (result.value) {
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
        }
        return;
      }
    });
  }
};
export default commentService;

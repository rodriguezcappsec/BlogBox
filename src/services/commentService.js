import swal from "sweetalert2";
import verbs from "../utils/verbs";
import endPoints from "./endPoints";

const commentService = {
  find: async id => {
    let commentID = id === undefined ? "" : id;
    let helper = await verbs
      .get(endPoints.commentEndPoint, commentID)
      .catch(err => {
        swal({
          type: "error",
          title:
            commentID === ""
              ? "could not get comments"
              : "could not get comment",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000
        });
      });
    if (helper) {
      if (id === undefined) {
        return helper.data.comments;
      } else {
        return helper.data.comment;
      }
    }
  },
  create: async (body = { comment: {} }) => {
    let helper = await verbs.post(endPoints.commentEndPoint, body).catch((err) => {      
      swal({
        type: "error",
        title: err.response.data,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000
      });
    });
    if (helper) {
      swal({
        type: "success",
        title: "Comment posted successfully!",
        toast: true,
        position: "top-left",
        showConfirmButton: false,
        timer: 3000
      });
      return helper.data.comment;
    }
  },
  update: async (id, body = { comment: {} }) => {
    let helper = await verbs
      .update(endPoints.commentEndPoint, id, body)
      .catch(() => {
        swal({
          type: "error",
          title: "could not update comment",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000
        });
      });
    if (helper) {
      swal({
        type: "success",
        title: "Comment updated successfully!",
        toast: true,
        position: "top-left",
        showConfirmButton: false,
        timer: 3000
      });
      return helper.data.comment;
    }
  },
  delete: id => {
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
          .del(endPoints.commentEndPoint, id)
          .catch(() => {
            swal({
              type: "error",
              title: "could not delete comment",
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
            title: "Comment deleted successfully!",
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

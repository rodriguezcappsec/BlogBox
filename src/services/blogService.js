import swal from "sweetalert2";
import verbs from "../utils/verbs";
import endPoints from "./endPoints";

const blogService = {
  find: async id => {
    let blogID = id === undefined ? "" : id;
    let helper = await verbs
      .get(endPoints.blogEndPoint, blogID)
      .catch(err => {
        swal({
          type: "error",
          title: blogID === "" ? "could not get blogs" : "could not get blog",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000
        });
      });
    if (helper) {
      if (id === undefined) {
        return helper.data.blogs;
      } else {
        return helper.data.blog;
      }
    }
  },
  create: async (body) => {
    let helper = await verbs
      .post(endPoints.blogEndPoint, body)
      .catch((err) => {
        swal({
          type: "error",
          title: "could not create blog",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000
        });
      });
    
    if (helper) {
      swal({
        type: "success",
        title: "Blog created successfully!",
        toast: true,
        position: "top-left",
        showConfirmButton: false,
        timer: 3000
      });
      return helper.data.blog;
    }
  },
  update: async (id, body = { blog: {} }) => {
    let helper = await verbs
      .update(endPoints.blogEndPoint, id, body)
      .catch(() => {
        swal({
          type: "error",
          title: "could not update blog",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000
        });
      });
    if (helper) {
      swal({
        type: "success",
        title: "Blog updated successfully!",
        toast: true,
        position: "top-left",
        showConfirmButton: false,
        timer: 3000
      });
      return helper.data.blog;
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
          .del(endPoints.blogEndPoint, id)
          .catch(() => {
            swal({
              type: "error",
              title: "could not delete blog",
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
            title: "Blog deleted successfully!",
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
export default blogService;

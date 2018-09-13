import Axios from "axios";
import swal from "sweetalert2";
import endPoint from "./endPoints";

class Blog {
  constructor(blog = {}) {
    this.blog = {
      blog: {
        title: blog.title,
        image: blog.image,
        article: blog.article,
        likes: blog.likes,
        topic: blog.topic
      }
    };
    this.token = {
      token: {
        headers: { Authorization: "Bearer " + blog.token }
      }
    };
  }
  getBlogs = async () => {
    let helper = await Axios.get(endPoint.blogEndPoint.blog).catch(() => {
      swal({
        type: "error",
        title: "could not load blogs",
        toast: true,
        position: "bottom-left",
        showConfirmButton: false,
        timer: 3000
      });
    });
    if (helper) {
      return helper.data.blogs;
    }
  };
  getBlogById = async id => {
    let helper = await Axios.get(`${endPoint.blogEndPoint.blog}/${id}`).catch(
      () => {
        swal({
          type: "error",
          title: "could not get blog",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000
        });
      }
    );
    if (helper) {
      return helper.data.blog;
    }
  };
  createBlog = async () => {
    let helper = await Axios.post(
      endPoint.blogEndPoint.blog,
      this.blog,
      this.token
    ).catch(() => {
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
      return helper.data.blog;
    }
  };
  updateBlog = async id => {
    let helper = await Axios.patch(
      `${endPoint.blogEndPoint.blog}/${id}`,
      this.blog,
      this.token
    ).catch(() => {
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
      return helper.data.blog;
    }
  };
  deleteBlog = async id => {
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        let helper= await Axios.delete(
          `${endPoint.blogEndPoint.blog}/${id}`,
          this.token
        ).catch(() => {
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
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000
          });
        }
        return;
      }
    });
  
  };
}

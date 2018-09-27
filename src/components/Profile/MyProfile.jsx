import React, { Component } from "react";
import Zoom from "@material-ui/core/Zoom";
import blogService from "../../services/blogService";
// import { Link } from "react-router-dom";
import swal from "sweetalert2";
import getField from "../../utils/getFormField";
import imageUpload from "../../services/imageUpload";
import EditBlogModal from "../Modal/EditBlogModal";


export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myBlogs: [],
      editBlog: {
        title: "",
        image: "",
        article: "",
        topic: ""
      },
      favorites: this.props.favorites
    };
    this.getField = getField.bind(this);
  }

  myBlogs = () => {
    blogService.find().then(record => {
      const filterBlogs = record.filter(
        b => b.userID._id === this.props.user._id
      );
      this.setState({ myBlogs: filterBlogs });
    });
  };
  componentDidMount() {
    this.myBlogs();
  }
  tempBlogID = (e, blog) => {
    e.preventDefault();
    blogService.find(blog._id).then(record => {
      const { title, image, article, topic } = record;
      this.setState({ editBlog: { title, image, article, topic } });
    });
    this.setState({ [e.target.name]: blog._id });
  };
  onDelete = (e, blog) => {
    e.preventDefault();
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
        blogService.delete(blog._id).then(this.myBlogs);
      }
    });
  };

  onEditBlog = e => {
    e.preventDefault();
    imageUpload(this.state.editBlog.image)
      .then(image => {
        blogService
          .update(this.state["tempID"], {
            blog: {
              title: this.state.editBlog.title,
              image: image.data.secure_url,
              article: this.state.editBlog.article,
              topic: this.state.editBlog.topic
            }
          })
          .then(data => {
            console.log(data);
            document.getElementById("edit-close-modal").click();
            this.myBlogs();
          });
      })
      .catch(err => console.error(err));
  };
  renderMyFavorites = () => {
    return this.props.favorites.map((b, index) => {
      return (
        <div className="col-lg-3 col-sm-6" key={index}>
          <div className="card">
            <header className="card-header">
              <h6 className="card-heading">{++index}</h6>
            </header>
            <div className="card-body d-flex px-3">
              <div className="mr-auto text-primary">
                <h5>
                  <span data-plugin="counterUp">{b.title}</span>
                </h5>
                <span>{b.userID.userName}</span>
              </div>
              <div>
                <a href="" className="btn btn-sm btn-danger">
                  Remove
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  renderMyBlogList = () => {
    return this.state.myBlogs.map((b, index) => {
      return (
        <div className="card" key={index}>
          <header className="card-header">
            <h5 className="card-heading">{++index}</h5>
          </header>
          <div className="card-body d-flex px-3">
            <div className="mr-auto text-primary">
              <h5>
                <span data-plugin="counterUp">{b.title}</span>
              </h5>
              <span>{b.date}</span>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="col-md-12">
                  <a
                    href=""
                    onClick={e => this.tempBlogID(e, b)}
                    data-toggle="modal"
                    data-target="#edit-blog-modal"
                    name="tempID"
                    className="btn btn-sm btn-warning"
                  >
                    Edit
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="col-md-12">
                  <a
                    href=""
                    onClick={e => this.onDelete(e, b)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <Zoom
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: 500 }}
        >
          <div className="profile-wrapper">
            <div className="profile-section-user">
              <div className="profile-info-brief p-3">
                <img
                  className="img-fluid user-profile-avatar"
                  src={this.props.user.avatar}
                  alt=""
                />
                <div className="text-center">
                  <h5 className="text-uppercase mb-4">
                    {this.props.user.userName}
                  </h5>
                  {/* <p className="text-muted fz-base">I'm Dwight Gully a web developer and software engineer. I studied computer
          science and software engineering.</p> */}
                </div>
              </div>
              {/* /.profile-info-brief */}
              {/* <div className="d-flex justify-content-center flex-wrap p-2"><button className="btn btn-success btn-sm m-2"><i className="fa fa-user-o mr-1" />
                        FOLLOW</button> <button className="btn btn-light btn-sm m-2 text-muted"><i className="fa fa-envelope-o mr-1" />
                            MESSAGE</button></div> */}
              <div className="hidden-sm-down">
                <hr className="m-0" />
                <div className="profile-info-contact p-4">
                  <h6 className="mb-3">Contact Information</h6>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <strong>EMAIL:</strong>
                        </td>
                        <td>
                          <p className="text-muted mb-0">
                            {this.props.user.email}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.profile-info-contact */}
                <hr className="m-0" />
              </div>
              {/* /.hidden-sm-down */}
            </div>
            {/* /.profile-section-user */}
            <div className="profile-section-main">
              {/* Nav tabs */}
              <ul className="nav nav-tabs profile-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#My-blogs"
                    role="tab"
                  >
                    My blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#My-favorite-blogs"
                    role="tab"
                  >
                    Favorite blogs
                  </a>
                </li>
              </ul>
              {/* /.nav-tabs */}
              {/* Tab panes */}
              <div className="tab-content profile-tabs-content">
                <div
                  className="tab-pane active "
                  id="My-blogs"
                  style={{ overflowY: "scroll", height: "300px" }}
                  role="tabpanel"
                >
                  {/* <div className="post-editor"><textarea name="post-field" id="post-field" className="post-field" placeholder="Write Something Cool!" defaultValue={""} />
                                <div className="d-flex">
                                    <div className="mr-auto"><button className="btn btn-sm btn-light mr-1"><i className="fa fa-camera" /></button>
                                        <button className="btn btn-sm btn-light mr-1"><i className="fa fa-link" /></button> <button className="btn btn-sm btn-light mr-1"><i className="fa fa-film" /></button> <button className="btn btn-sm btn-light mr-1"><i className="fa fa-code" /></button></div><button className="btn btn-success px-4 py-1">Post</button>
                                </div>
                            </div> */}
                  {this.renderMyBlogList()}
                </div>
                <div
                  className="tab-pane"
                  id="My-favorite-blogs"
                  style={{ overflowY: "scroll", height: "300px" }}
                  role="tabpanel"
                >
                  <div className="row">{this.renderMyFavorites()}</div>
                </div>
              </div>
              {/* /.tab-content */}
            </div>
            {/* /.profile-section-main */}
          </div>
        </Zoom>
        <EditBlogModal
          onEdit={this.onEditBlog}
          getField={this.getField}
          values={this.state.editBlog}
        />
      </React.Fragment>
    );
  }
}

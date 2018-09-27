import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slide from "@material-ui/core/Slide";

export default class BlogsGrid extends Component {
  componentDidMount() {
    this.props.refetch();
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {this.props.blogs.map((blog, index) => {
            return (
              <Slide
                in={true}
                direction={index % 2 === 0 ? "right" : "left"}
                style={{ transformOrigin: "0 0 0" }}
                {...(index % 2 === 0 ? { timeout: 500 } : { timeout: 500 })}
                key={index}
              >
                <div className="col-lg-4" key={index}>
                  <div className="card widget-blog-post bg-faded">
                    <div className="cover">
                      <img
                        className="card-img-top"
                        src={blog.image}
                        alt="true"
                      />
                      <div className="cover-overlay">
                        <img
                          className="avatar-floating-left avatar avatar-circle avatar-md"
                          src={blog.userID.avatar}
                          alt=""
                        />
                      </div>
                    </div>
                    {/* /.cover */}
                    <div className="card-body">
                      <h5>{blog.userID.userName}</h5>
                      <hr />
                      <h6 style={{ textAlign: "center" }}>{blog.title}</h6>
                      <hr />
                      <p className="card-text" style={{ textAlign: "justify" }}>
                        {blog.article}
                      </p>
                      <div className="mt-4">
                        <Link
                          to={`/blog/${blog._id}`}
                          className="btn btn-rounded btn-success "
                        >
                          Read More
                        </Link>
                      </div>
                      <hr />
                      <div className="d-flex">
                        {/* {this.props.loged ? (
                          <div className="mr-auto">
                            <button className="btn btn-icon btn-lg circle mr-1 bg-faded text-gray">
                              <i className="fa fa-thumbs-up" />
                            </button>{" "}
                            <span>0</span>
                          </div>
                        ) : (
                          ""
                        )} */}
                        <div>
                          <button className="btn btn-icon btn-lg circle mr-1 bg-faded text-gray">
                            <i className="fa fa-comments" />
                          </button>{" "}
                          <span>{blog.comments.length}</span>
                        </div>
                        {this.props.loged ? (
                          <div className="ml-4">
                            <button
                              name="saveBlog"
                              onClick={() => this.props.saveBlog(blog._id)}
                              className="btn btn-icon btn-lg circle mr-1 bg-faded text-gray"
                            >
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

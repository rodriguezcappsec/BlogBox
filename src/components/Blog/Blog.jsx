import React, { Component } from "react";
import Zoom from "@material-ui/core/Zoom";
import Comments from "./Comments";
import blogService from "../../services/blogService";
import getField from "../../utils/getFormField";
import commentService from "../../services/commentService";
export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogID: this.props.match.params.id,
      blog: "",
      user: "",
      comments: [],
      commentField: false,
      postComment: {
        body: "",
        blogID: this.props.match.params.id
      }
    };
    this.getField = getField.bind(this);
  }
  getBlog = () => {
    blogService.find(this.state.blogID).then(blog => {
      this.setState({ blog: blog });
      this.setState({ user: blog.userID });
      this.setState({ comments: blog.comments }, () => {
        console.log(this.state.comments);
        
      });
    });
  };
  openCommentField = () => {
    this.setState({ commentField: !this.state.commentField });
  };
  handleComment = e => {
    e.preventDefault();
    commentService
      .create({
        comment: {
          body: this.state.postComment.body,
          blogID: this.state.postComment.blogID
        }
      })
      .then(() => {
        this.getBlog();
      });
  };
  componentDidMount() {
    this.getBlog();
  }
  generateBlog = () => {
    return (
      <Zoom
        in={true}
        style={{ transformOrigin: "0 0 0" }}
        {...{ timeout: 500 }}
      >
        <div>
          <div className="card mb-5 bg-faded p-2 widget-blog-post">
            <div className="cover">
              <img
                className="card-img-top"
                src={this.state.blog.image}
                alt=""
              />
              <div className="cover-overlay">
                <img
                  className="avatar-floating-left avatar avatar-circle avatar-xl"
                  src={this.state.user.avatar}
                  alt=""
                />
                {/*avatar picture here*/}
              </div>
            </div>
            <div className="card-body mt-4">
              <h5 className="mb-4">{this.state.blog.title}</h5>
              <p className="card-text" style={{ textAlign: "justify" }}>
                {this.state.blog.article}
              </p>
            </div>
          </div>
          <div className="text-center">
            <h6 className="mb-4">{this.state.blog.date}</h6>
          </div>
          {this.props.loged ? (
            <div className="text-center">
              <button
                className="btn btn-lg btn-success px-5 py-3" // data-target="#create-comment-modal" // data-toggle="modal"
                onClick={this.openCommentField}
              >
                LEAVE A COMMENT
              </button>
            </div>
          ) : (
            ""
          )}
          {this.state.commentField ? (
            <form onSubmit={this.handleComment}>
              <div className="form-group">
                <label htmlFor="postComment">Post a comment</label>
                <textarea
                  className="form-control"
                  id="postComment"
                  rows="3"
                  name="body"
                  onChange={e => this.getField(e, "postComment")}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Post
              </button>
            </form>
          ) : (
            ""
          )}
          <Comments comments={this.state.comments} />
        </div>
      </Zoom>
    );
  };
  render() {
    return <React.Fragment>{this.generateBlog()}</React.Fragment>;
  }
}

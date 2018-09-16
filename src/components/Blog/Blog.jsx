import React, { Component } from "react";
import Zoom from "@material-ui/core/Zoom";
import Comments from "./Comments";
import blogService from "../../services/blogService";
export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogID: this.props.match.params.id,
      blog: {},
      comments: []
    };
  }
  getBlog = () => {
    blogService.find(this.state.blogID).then(blog => {
      this.setState({ blog: blog });
      this.setState({ comments: blog.comments });
    });
  };
  componentDidMount() {
    this.getBlog();    
  }

  render() {
    return (
      <React.Fragment>
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
                  src="/assets/global/images/blog-img-05.jpg"
                  alt=""
                />
                <div className="cover-overlay">
                  <img
                    className="avatar-floating-left avatar avatar-circle avatar-xl"
                    src="/assets/global/images/217.jpg"
                    alt=""
                  />
                  {/*avatar picture here*/}
                </div>
              </div>
              <div className="card-body mt-4">
                <h5 className="mb-4">{this.state.blog.title}</h5>
                <p className="card-text">{this.state.blog.article}</p>
              </div>
            </div>
            <div className="text-center">
              <h6 className="mb-4">{this.state.blog.date}</h6>
            </div>
            <div className="text-center">
              <button className="btn btn-lg btn-success px-5 py-3">
                LEAVE A COMMENT
              </button>
            </div>
            <Comments comments={this.state.comments} />
          </div>
        </Zoom>
      </React.Fragment>
    );
  }
}

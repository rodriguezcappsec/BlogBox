import React, { Component } from "react";

export default class Comments extends Component {
  renderComments = () => {
    return this.props.comments.map((comment, index) => {
      return (
        <div className="card bg-faded p-3 border-radius-1" key={index}>
          <div className="p-3 media align-items-start">
            <a className="avatar avatar-circle avatar-lg">
              <img src="../assets/global/images/201.jpg" alt="true" />
            </a>
            <div className="media-body">
              <h6>{comment.name}</h6>
              <p className="mb-2">{comment.body}</p>
              <a className="font-italic font-weight-normal">Reply</a>
            </div>
          </div>
          <a className="font-italic font-weight-normal">{comment.date}</a>
        </div>
      );
    });
  };
  componentDidMount() {
    console.log(this.props.comments);
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="mt-4">
            <h3 className="mb-4">{this.props.comments.length} Comments</h3>
            {this.renderComments()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

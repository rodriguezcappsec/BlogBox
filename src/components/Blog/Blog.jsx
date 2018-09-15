import React, { Component } from "react";
import Zoom from "@material-ui/core/Zoom";

export default class Blog extends Component {
    constructor(props) {
      super(props)
    this.state = {
      blogID: this.props.location.state.id
    };
  }
  render() {
    return (
      <div>
        <Zoom
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: 500 }}
        >
          <h1>HELLO!!! {this.state.blogID} </h1>
        </Zoom>
      </div>
    );
  }
}

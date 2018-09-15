import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Comments extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="mt-4">
            <h3 className="mb-4">4 Comments</h3>
            <div className="card bg-faded p-3 border-radius-1">
              <div className="p-3 media align-items-start">
                <a href="#" className="avatar avatar-circle avatar-lg">
                  <img src="../assets/global/images/201.jpg" alt />
                </a>
                <div className="media-body">
                  <h6>Bertha Bobier</h6>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rerum ipsum dolores eius molestiae?
                  </p>
                  <a href="#" className="font-italic font-weight-normal">
                    Reply
                  </a>
                </div>
              </div>
              {/* /.media */}
              <div
                className="replies border-radius-1"
                style={{
                  background: "rgba(255,255,255,.7)",
                  margin: "0 6.5rem"
                }}
              >
                <div className="p-3 media align-items-start border-b-1">
                  <a href="#" className="avatar avatar-circle avatar-sm">
                    <img src="../assets/global/images/202.jpg" alt />
                  </a>
                  <div className="media-body">
                    <h6>Sydney Soros</h6>
                    <p className="mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rerum ipsum dolores eius molestiae?
                    </p>
                  </div>
                </div>
                {/* /.media */}
                <div className="p-3 media align-items-start">
                  <a href="#" className="avatar avatar-circle avatar-sm">
                    <img src="../assets/global/images/205.jpg" alt />
                  </a>
                  <div className="media-body">
                    <h6>Demarcus Liverman</h6>
                    <p className="mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rerum ipsum dolores eius molestiae?
                    </p>
                  </div>
                </div>
                {/* /.media */}
              </div>
              {/* /.replies */}
            </div>
            {/* /.card */}
            <div className="card p-3 bg-faded border-radius-1">
              <div className="p-3 media align-items-start">
                <a href="#" className="avatar avatar-circle avatar-lg">
                  <img src="../assets/global/images/204.jpg" alt />
                </a>
                <div className="media-body">
                  <h6>Vada Rogg</h6>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rerum ipsum dolores eius molestiae?
                  </p>
                  <a href="#" className="font-italic font-weight-normal">
                    Reply
                  </a>
                </div>
              </div>
              {/* /.media */}
            </div>
            {/* /.card */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

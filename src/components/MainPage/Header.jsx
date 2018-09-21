import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return <React.Fragment>
        <header className="site-header">
          <div className="breadcrumb">
            <ol className="breadcrumb-tree">
              <Link to="/" className="breadcrumb-item">
                <span className="zmdi zmdi-home mr-1" /> <span>Home</span>
              </Link>
            </ol>
            {this.props.loged ? <ul className="breadcrumb-btns">
                <li className="dropdown">
                  <a href="" className="btn btn-sm btn-scondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="zmdi zmdi-settings mr-1 text-success" /> <span className="mr-1">
                      Settings
                    </span>
                    <i className="zmdi zmdi-chevron-down" />
                  </a>
                  <div className="dropdown-menu p-0 mt-1" data-plugin="dropdownCaret">
                    <a className="dropdown-item dropdown-menu-cap">
                      Your Settings
                    </a> <a className="dropdown-item" href="">
                      Edit Profile
                    </a>{" "}
                  </div>
                </li>
                <li>
              <a href="" className="btn btn-sm btn-scondary" data-toggle="modal" data-target="#create-blog-modal">
                    <i className="zmdi zmdi-plus mr-1 text-success" /> <span
                    >
                      Add
                    </span>
                  </a>
                </li>
              </ul> : ""}
          </div>
        </header>
      </React.Fragment>;
  }
}

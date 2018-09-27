import React, { Component } from "react";
import { Link } from "react-router-dom";
import endPoints from "../../services/endPoints";
export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <nav className="site-navbar navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
          <div className="navbar-header">
            <Link
              to="/"
              onClick={this.props.reRenderParentState}
              className="navbar-brand"
              href=""
            >
              <span className="brand-name hidden-fold">BlogBox</span>{" "}
            </Link>
            {/* <button data-toggle="menubar" className="mr-auto hidden-lg-up hamburger hamburger--collapse js-hamburger" type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
          </button> */}
            {/* <button type="button" className="navbar-toggler hidden-lg-up collapsed" data-toggle="navbar-search">
              <span className="sr-only">Toggle navigation</span> <span className="zmdi zmdi-hc-lg zmdi-search" />
          </button> */}
            <button
              type="button"
              className="navbar-toggler hidden-lg-up collapsed"
              data-toggle="collapse"
              data-target="#site-navbar-collapse"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="zmdi zmdi-hc-lg zmdi-more" />
            </button>
          </div>
          {/* /.navbar-header */}
          <div className="collapse navbar-collapse" id="site-navbar-collapse">
            <ul className="navbar-nav mr-auto">{/**/}</ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                {window.location.pathname === "/" ? (
                  <div id="navbar-search" className="navbar-search">
                    <input
                      className="form-control navbar-search-field"
                      name="searchBar"
                      onChange={e => this.props.getField(e)}
                      placeholder="Search blog title"
                      type="text"
                    />{" "}
                    <button className="navbar-search-submit">
                      <svg className="svg-search-icon">
                        <use xlinkHref="../assets/global/svg-sprite/sprite.svg#search" />
                      </svg>
                    </button>{" "}
                    {/* <button
                      className="navbar-search-close"
                      data-toggle="navbar-search"
                    >
                      <i className="zmdi zmdi-close" />
                    </button> */}
                    <div
                      className="navbar-search-backdrop"
                      data-toggle="navbar-search"
                    />
                  </div>
                ) : (
                  ""
                )}
                {/* /.navbar-search */}
              </li>
              <li
                id="navbar-search-toggler"
                className="nav-item hidden-xl-up hidden-sm-down"
              >
                <a className="nav-link" href="" data-toggle="navbar-search">
                  <span className="zmdi zmdi-hc-lg zmdi-search" />
                </a>
              </li>
              {this.props.loged ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link site-user dropdown-toggle"
                    href=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      className="nav-img"
                      src="../assets/global/images/user-img.png"
                      alt="true"
                    />{" "}
                    <span className="nav-text hidden-sm-down ml-2">
                      {this.props.userInfo.userName}
                    </span>{" "}
                    <i className="nav-caret hidden-sm-down zmdi zmdi-hc-sm zmdi-chevron-down" />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right p-0"
                    data-plugin="dropdownCaret"
                  >
                    <Link to="/my-profile" className="dropdown-item" href="">
                      <i className="fa fa-user-o mr-3" />{" "}
                      <span>My Profile</span>
                    </Link>
                    <div className="dropdown-divider" />
                    <a
                      className="dropdown-item"
                      data-toggle="modal"
                      data-target="#change-password-modal"
                      href=""
                    >
                      <i className="fa fa-user-secret mr-3" />
                      <span>Change Password</span>{" "}
                    </a>

                    <a
                      className="dropdown-item"
                      href=""
                      onClick={this.props.signOut}
                    >
                      <i className="fa fa-power-off mr-3" /> <span>Logout</span>
                    </a>
                  </div>
                </li>
              ) : (
                <a
                  className="nav-link site-user"
                  href=""
                  data-toggle="modal"
                  data-target="#auth-modal"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    className="nav-img"
                    src="../assets/global/images/user-img.png"
                    alt="true"
                  />
                  <span className="nav-text hidden-sm-down ml-2">Join In</span>
                </a>
              )}
            </ul>
            {/* /.navbar-nav */}
          </div>
          {/* /.collapse */}
        </nav>
      </React.Fragment>
    );
  }
}

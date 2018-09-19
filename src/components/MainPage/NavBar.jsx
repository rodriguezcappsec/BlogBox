import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: {
        old: "",
        new:"",
      }
    };
  }


  render() {
    return <React.Fragment>
        <nav className="site-navbar navbar fixed-top navbar-expand-lg navbar-dark bg-orange">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand" href="">
              <span className="brand-name hidden-fold">BlogBox</span>{" "}
            </Link>
            <button data-toggle="menubar" className="mr-auto hidden-lg-up hamburger hamburger--collapse js-hamburger" type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button> <button type="button" className="navbar-toggler hidden-lg-up collapsed" data-toggle="navbar-search">
              <span className="sr-only">Toggle navigation</span> <span className="zmdi zmdi-hc-lg zmdi-search" />
            </button> <button type="button" className="navbar-toggler hidden-lg-up collapsed" data-toggle="collapse" data-target="#site-navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span> <span className="zmdi zmdi-hc-lg zmdi-more" />
            </button>
          </div>
          {/* /.navbar-header */}
          <div className="collapse navbar-collapse" id="site-navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="nav-icon fa fa-bell-o" /> <span className="badge badge-circle badge-danger">
                    4
                  </span>
                </a>
                <div className="media-list dropdown-menu p-0" data-plugin="dropdownCaret">
                  <div className="dropdown-item dropdown-menu-cap d-flex">
                    <span className="mr-auto my-1">
                      You Have 4 Unread Notifications
                    </span> <a href="" className="btn btn-sm btn-light my-1">
                      See all
                    </a>
                  </div>
                  <div className="scroll-container">
                    <a href="" className="media dropdown-item">
                      <span className="avatar bg-success" data-plugin="firstLitter" data-target="#message-1" />
                      <div className="media-body">
                        <h6 className="media-heading" id="message-1">
                          Mohamed Ali
                        </h6>
                        <small>
                          Lorem ipsum dolor sit amet, Lorem ipsum dolor.
                        </small>
                      </div>
                    </a>
                    <a href="" className="media dropdown-item">
                      <span className="avatar bg-warning" data-plugin="firstLitter" data-target="#message-2" />
                      <div className="media-body">
                        <h6 className="media-heading" id="message-2">
                          Sophia Smith
                        </h6>
                        <small>
                          Lorem ipsum dolor sit amet, Lorem ipsum dolor.
                        </small>
                      </div>
                    </a>
                    <a href="" className="media dropdown-item">
                      <span className="avatar bg-primary" data-plugin="firstLitter" data-target="#message-3" />
                      <div className="media-body">
                        <h6 className="media-heading" id="message-3">
                          Sarah Adams
                        </h6>
                        <small>
                          Lorem ipsum dolor sit amet, Lorem ipsum dolor.
                        </small>
                      </div>
                    </a>
                    <a href="" className="media dropdown-item">
                      <span className="avatar bg-danger" data-plugin="firstLitter" data-target="#message-4" />
                      <div className="media-body">
                        <h6 className="media-heading" id="message-4">
                          John Doe
                        </h6>
                        <small>
                          Lorem ipsum dolor sit amet, Lorem ipsum dolor.
                        </small>
                      </div>
                    </a>
                  </div>
                  {/* /.scroll-container */}
                </div>
                {/* /.media-list */}
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="nav-icon fa fa-envelope-o" /> <span className="badge badge-circle badge-success">
                    3
                  </span>
                </a>
                <div className="media-list dropdown-menu p-0" data-plugin="dropdownCaret">
                  <div className="dropdown-item dropdown-menu-cap d-flex">
                    <span className="mr-auto my-1">
                      You Have 3 Unread Messages
                    </span>
                    <a href="" className="btn btn-sm btn-light my-1">
                      See all
                    </a>
                  </div>
                  <div className="scroll-container">
                    <a href="" className="media dropdown-item">
                      <div className="avatar">
                        <img src="../assets/global/images/203.jpg" alt="true" /> <span className="badge badge-success">
                          5
                        </span>
                      </div>
                      <div className="media-body">
                        <h6 className="media-heading">Ahmed Gamal</h6>
                        <small>
                          Lorem ipsum dolor sit amet, Lorem ipsum dolor.
                        </small>
                      </div>
                    </a>
                    <a href="" className="media dropdown-item">
                      <div className="avatar">
                        <img src="../assets/global/images/101.jpg" alt="true" /> <span className="badge badge-success">
                          9
                        </span>
                      </div>
                      <div className="media-body">
                        <h6 className="media-heading">Nick Pettit</h6>
                        <small>
                          Lorem ipsum dolor sit amet, Lorem ipsum dolor.
                        </small>
                      </div>
                    </a>
                    <a href="" className="media dropdown-item">
                      <div className="avatar">
                        <img src="../assets/global/images/202.jpg" alt="true" /> <span className="badge badge-success">
                          1
                        </span>
                      </div>
                      <div className="media-body">
                        <h6 className="media-heading">Media heading</h6>
                        <small>
                          Lorem ipsum dolor sit amet, Lorem ipsum dolor.
                        </small>
                      </div>
                    </a>
                  </div>
                  {/* /.scroll-container */}
                </div>
                {/* /.media-list */}
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <div id="navbar-search" className="navbar-search">
                  <form className="form-inline navbar-search-form">
                    <input className="form-control navbar-search-field" placeholder="Search" type="text" /> <button type="submit" className="navbar-search-submit">
                      <svg className="svg-search-icon">
                        <use xlinkHref="../assets/global/svg-sprite/sprite.svg#search" />
                      </svg>
                    </button> <button className="navbar-search-close" data-toggle="navbar-search">
                      <i className="zmdi zmdi-close" />
                    </button>
                  </form>
                  <div className="navbar-search-backdrop" data-toggle="navbar-search" />
                </div>
                {/* /.navbar-search */}
              </li>
              <li id="navbar-search-toggler" className="nav-item hidden-xl-up hidden-sm-down">
                <a className="nav-link" href="" data-toggle="navbar-search">
                  <span className="zmdi zmdi-hc-lg zmdi-search" />
                </a>
              </li>
              {this.props.loged ? <li className="nav-item dropdown">
                  <a className="nav-link site-user dropdown-toggle" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="nav-img" src="../assets/global/images/user-img.png" alt="true" /> <span className="nav-text hidden-sm-down ml-2">
                      {this.props.userInfo.userName}
                    </span> <i className="nav-caret hidden-sm-down zmdi zmdi-hc-sm zmdi-chevron-down" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right p-0" data-plugin="dropdownCaret">
                    <a className="dropdown-item" href="">
                      <i className="fa fa-user-o mr-3" /> <span>
                        My Profile
                      </span>
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" data-toggle="modal" data-target="#change-password-modal" href="">
                      <i className="fa fa-user-secret mr-3" />
                      <span>Change Password</span>{" "}
                    </a>
                    <a className="dropdown-item" href="" onClick={this.props.signOut}>
                      <i className="fa fa-power-off mr-3" /> <span>
                        Logout
                      </span>
                    </a>
                  </div>
                </li> : <a className="nav-link site-user" href="" data-toggle="modal" data-target="#auth-modal" aria-haspopup="true" aria-expanded="false">
                  <img className="nav-img" src="../assets/global/images/user-img.png" alt="true" />
                  <span className="nav-text hidden-sm-down ml-2">
                    Join In
                  </span>
                </a>}
            </ul>
            {/* /.navbar-nav */}
          </div>
          {/* /.collapse */}
        </nav>
      </React.Fragment>;
  }
}

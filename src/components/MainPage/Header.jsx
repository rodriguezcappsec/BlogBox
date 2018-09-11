import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="site-header">
          <div className="jumbotron jumbotron-fluid">
            <div className="jumbotron-text">
              <h4 className="text-primary">Welcome To Luxury</h4>
              <small className="font-italic text-muted">
                Bootstrap 4 Web App Kit
              </small>
            </div>
            {/* /.jumbotron-text */}
            <div className="jumbotron-charts">
              <div className="item">
                <div className="mr-3">
                  <small className="d-block mb-1">STORE INCOME</small>{" "}
                  <svg className="svg-euro-icon mr-1">
                    <use xlinkHref="../../../public/assets/global/svg-sprite/sprite.svg#euro" />
                  </svg>{" "}
                  <strong data-plugin="counterUp">6950</strong>
                </div>
                <div>
                  <div
                    className="jumbotron-chart mt-2"
                    id="jumbotron_chart_1"
                  />
                </div>
              </div>
              {/* /.item */}
              <div className="item">
                <div className="mr-3">
                  <small className="d-block mb-1">ORDERS</small>{" "}
                  <svg className="svg-caret-icon mr-1">
                    <use xlinkHref="../assets/global/svg-sprite/sprite.svg#caret" />
                  </svg>{" "}
                  <strong data-plugin="counterUp">7639</strong>
                </div>
                <div>
                  <div
                    className="jumbotron-chart mt-2"
                    id="jumbotron_chart_2"
                  />
                </div>
              </div>
              {/* /.item */}
              <div className="item">
                <div className="mr-3">
                  <small className="d-block mb-1">SITE TRAFFIC</small>{" "}
                  <svg className="svg-arrows-up-down-icon mr-1">
                    <use xlinkHref="../assets/global/svg-sprite/sprite.svg#arrows-up-down" />
                  </svg>{" "}
                  <strong data-plugin="counterUp">5673</strong>
                </div>
                <div>
                  <div
                    className="jumbotron-chart mt-2"
                    id="jumbotron_chart_3"
                  />
                </div>
              </div>
              {/* /.item */}
            </div>
            {/* /.jumbotron-charts */}
          </div>
          {/* /.jumbotron */}
          <div className="breadcrumb">
            <ol className="breadcrumb-tree">
              <li className="breadcrumb-item">
                <a href="#">
                  <span className="zmdi zmdi-home mr-1" /> <span>Home</span>
                </a>
              </li>
              <li className="breadcrumb-item active">
                <a href="#">Luxury</a>
              </li>
            </ol>
            <ul className="breadcrumb-btns">
              <li className="dropdown">
                <a
                  href="#"
                  className="btn btn-sm btn-scondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="zmdi zmdi-settings mr-1 text-success" />{" "}
                  <span className="mr-1">Settings</span>
                  <i className="zmdi zmdi-chevron-down" />
                </a>
                <div
                  className="dropdown-menu p-0 mt-1"
                  data-plugin="dropdownCaret"
                >
                  <a className="dropdown-item dropdown-menu-cap">
                    Your Settings
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Edit Profile
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Privacy Settings
                  </a>{" "}
                  <a className="dropdown-item" href="#">
                    Secuirty Settings
                  </a>
                </div>
              </li>
              <li>
                <a href="#" className="btn btn-sm btn-scondary">
                  <i className="zmdi zmdi-headset-mic mr-1 text-success" />{" "}
                  <span>Support</span>
                </a>
              </li>
              <li>
                <a href="#" className="btn btn-sm btn-scondary">
                  <i className="zmdi zmdi-plus mr-1 text-success" />{" "}
                  <span>Add</span>
                </a>
              </li>
            </ul>
          </div>
          {/* /.breadcrumb */}
        </header>
        {/* /.site-header */}
      </React.Fragment>
    );
  }
}

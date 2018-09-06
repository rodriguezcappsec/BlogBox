import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark primary-color">
          {/* Navbar brand */}
          <a className="navbar-brand" href=''   >
            Navbar
          </a>
          {/* Collapse button */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapsible content */}
          <div className="collapse navbar-collapse" id="basicExampleNav">
            {/* Links */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link"   >
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"   >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"   >
                  Pricing
                </a>
              </li>
              {/* Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div
                  className="dropdown-menu dropdown-primary"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item"   >
                    Action
                  </a>
                  <a className="dropdown-item"   >
                    Another action
                  </a>
                  <a className="dropdown-item"   >
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
            {/* Links */}
            <form className="form-inline">
              <div className="md-form my-0">
                <input
                  className="form-control mr-sm-2"
                  placeholder="Search"
                  aria-label="Search"
                  type="text"
                />
              </div>
            </form>
          </div>
          {/* Collapsible content */}
        </nav>
      </React.Fragment>
    );
  }
}

export default App;

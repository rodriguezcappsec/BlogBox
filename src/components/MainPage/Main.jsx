import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="site-main">
          <div className="site-content">
            {/* .site-content this.props.children here */}
            {this.props.children}
          </div>
          <footer className="site-footer">
            <div className="mr-auto" />
            <div />
          </footer>
        </main>
      </React.Fragment>
    );
  }
}

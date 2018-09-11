import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="site-main">
          <div className="site-content">
            {/* /.site-content */}
            <div className="row">
              <div className="col-lg-8">
                <div className="card">
                  <header className="card-header">
                    <h6 className="card-heading">Recent Orders</h6>
                    <ul className="card-toolbar">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="zmdi zmdi-refresh" />
                        </a>
                      </li>
                      <li className="dropdown">
                        <a
                          href="javascript:void(0)"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="zmdi zmdi-more-vert" />
                        </a>
                        <div className="dropdown-menu float-right">
                          <a className="dropdown-item" href="#">
                            Option 1
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            Option 2
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            Option 3
                          </a>
                        </div>
                      </li>
                    </ul>
                    {/* /.card-toolbar */}
                  </header>
                  <div>
                    <div className="d-flex justify-content-end p-4 mb-4">
                      <label>
                        <span className="mr-2">Live</span>{" "}
                        <input
                          data-plugin="switchery"
                          data-color="#60c84c"
                          data-size="small"
                          defaultChecked="checked"
                          type="checkbox"
                        />
                      </label>
                    </div>
                    <div
                      id="dash1-flotchart-1"
                      style={{ width: "100%", height: 320 }}
                    />
                  </div>
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-lg-4">
                <div className="card">
                  <header className="card-header">
                    <h6 className="card-heading">New Feedbacks</h6>
                    <ul className="card-toolbar">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="zmdi zmdi-refresh" />
                        </a>
                      </li>
                      <li className="dropdown">
                        <a
                          href="javascript:void(0)"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="zmdi zmdi-more-vert" />
                        </a>
                        <div className="dropdown-menu float-right">
                          <a className="dropdown-item" href="#">
                            Option 1
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            Option 2
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            Option 3
                          </a>
                        </div>
                      </li>
                    </ul>
                    {/* /.card-toolbar */}
                  </header>
                  <div className="card-body d-flex">
                    <h2 className="text-primary mr-auto">
                      <span data-plugin="counterUp">51</span>
                    </h2>
                    <div className="text-primary">
                      <span
                        className="dash1-peity-chart"
                        data-peity="{&quot;stroke&quot;: &quot;#39527b&quot; }"
                      >
                        0,1,2,0,2,0,3
                      </span>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
                <div className="card">
                  <header className="card-header">
                    <h6 className="card-heading">Total Profit</h6>
                    <ul className="card-toolbar">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="zmdi zmdi-refresh" />
                        </a>
                      </li>
                      <li className="dropdown">
                        <a
                          href="javascript:void(0)"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="zmdi zmdi-more-vert" />
                        </a>
                        <div className="dropdown-menu float-right">
                          <a className="dropdown-item" href="#">
                            Option 1
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            Option 2
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            Option 3
                          </a>
                        </div>
                      </li>
                    </ul>
                    {/* /.card-toolbar */}
                  </header>
                  <div className="card-body d-flex">
                    <h2 className="text-success mr-auto">
                      $<span data-plugin="counterUp">1884</span>
                    </h2>
                    <div className="text-success">
                      <span
                        className="dash1-peity-chart"
                        data-peity="{&quot;stroke&quot;: &quot;#60c84c&quot; }"
                      >
                        0,1,3,0,2,0,2
                      </span>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
                <div className="card">
                  <header className="card-header">
                    <h6 className="card-heading">New Orders</h6>
                    <ul className="card-toolbar">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="zmdi zmdi-refresh" />
                        </a>
                      </li>
                      <li className="dropdown">
                        <a
                          href="javascript:void(0)"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="zmdi zmdi-more-vert" />
                        </a>
                        <div className="dropdown-menu float-right">
                          <a className="dropdown-item" href="#">
                            Option 1
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            Option 2
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            Option 3
                          </a>
                        </div>
                      </li>
                    </ul>
                    {/* /.card-toolbar */}
                  </header>
                  <div className="card-body d-flex">
                    <h2 className="text-danger mr-auto">
                      <span data-plugin="counterUp">262</span>
                    </h2>
                    <div className="text-danger">
                      <span
                        className="dash1-peity-chart"
                        data-peity="{&quot;stroke&quot;: &quot;#ff7473&quot; }"
                      >
                        0,1,2,0,2,0,1
                      </span>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <header className="card-header">
                    <h6 className="card-heading">Income</h6>
                    <ul className="card-toolbar">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="zmdi zmdi-refresh" />
                        </a>
                      </li>
                      <li className="dropdown">
                        <a
                          href="javascript:void(0)"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="zmdi zmdi-more-vert" />
                        </a>
                        <div className="dropdown-menu float-right">
                          <a className="dropdown-item" href="#">
                            Option 1
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            Option 2
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            Option 3
                          </a>
                        </div>
                      </li>
                    </ul>
                    {/* /.card-toolbar */}
                  </header>
                  <div className="card-body d-flex px-3">
                    <div className="mr-auto text-primary">
                      <h5>
                        $<span data-plugin="counterUp">40,886,200</span>
                      </h5>
                      <span>Total Income</span>
                    </div>
                    <div>
                      <a href="#" className="btn btn-sm btn-primary">
                        Monthly
                      </a>
                      <div className="mt-3 text-center">
                        <span className="mr-2">98% </span>
                        <i className="fa fa-long-arrow-up text-success" />
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <header className="card-header">
                    <h6 className="card-heading">Orders</h6>
                    <ul className="card-toolbar">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="zmdi zmdi-refresh" />
                        </a>
                      </li>
                      <li className="dropdown">
                        <a
                          href="javascript:void(0)"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="zmdi zmdi-more-vert" />
                        </a>
                        <div className="dropdown-menu float-right">
                          <a className="dropdown-item" href="#">
                            Option 1
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            Option 2
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            Option 3
                          </a>
                        </div>
                      </li>
                    </ul>
                    {/* /.card-toolbar */}
                  </header>
                  <div className="card-body d-flex px-3">
                    <div className="mr-auto text-primary">
                      <h5 data-plugin="counterUp">46128</h5>
                      <span>New orders</span>
                    </div>
                    <div>
                      <a href="#" className="btn btn-sm btn-success">
                        Annual
                      </a>
                      <div className="mt-3 text-center">
                        <span className="mr-2">20% </span>
                        <i className="fa fa-long-arrow-up text-success" />
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <header className="card-header">
                    <h6 className="card-heading">Visits</h6>
                    <ul className="card-toolbar">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="zmdi zmdi-refresh" />
                        </a>
                      </li>
                      <li className="dropdown">
                        <a
                          href="javascript:void(0)"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="zmdi zmdi-more-vert" />
                        </a>
                        <div className="dropdown-menu float-right">
                          <a className="dropdown-item" href="#">
                            Option 1
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            Option 2
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            Option 3
                          </a>
                        </div>
                      </li>
                    </ul>
                    {/* /.card-toolbar */}
                  </header>
                  <div className="card-body d-flex px-3">
                    <div className="mr-auto text-primary">
                      <h5>
                        <span data-plugin="counterUp">9,048,012</span>
                      </h5>
                      <span>Site visits today</span>
                    </div>
                    <div>
                      <a href="#" className="btn btn-sm btn-danger">
                        Today
                      </a>
                      <div className="mt-3 text-center">
                        <span className="mr-2">46% </span>
                        <i className="fa fa-long-arrow-down text-danger" />
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <header className="card-header">
                    <h5 className="card-heading">User activity</h5>
                    <ul className="card-toolbar">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="zmdi zmdi-refresh" />
                        </a>
                      </li>
                      <li className="dropdown">
                        <a
                          href="javascript:void(0)"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="zmdi zmdi-more-vert" />
                        </a>
                        <div className="dropdown-menu float-right">
                          <a className="dropdown-item" href="#">
                            Option 1
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            Option 2
                          </a>{" "}
                          <a className="dropdown-item" href="#">
                            Option 3
                          </a>
                        </div>
                      </li>
                    </ul>
                    {/* /.card-toolbar */}
                  </header>
                  <div className="card-body d-flex px-3">
                    <div className="mr-auto text-primary">
                      <h5>
                        <span data-plugin="counterUp">80,600</span>
                      </h5>
                      <span>In first month</span>
                    </div>
                    <div>
                      <a href="#" className="btn btn-sm btn-warning">
                        Low value
                      </a>
                      <div className="mt-3 text-center">
                        <span className="mr-2">37% </span>
                        <i className="fa fa-long-arrow-down text-danger" />
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
          </div>
          {/* /.site-content */}
          <footer className="site-footer">
            <div className="mr-auto" />
            <div>
              <a href="https://themeforest.net/item/luxury-responsive-bootstrap-4-admin-template/20881509" />
            </div>
          </footer>
          {/* /.site-footer */}
        </main>
      </React.Fragment>
    );
  }
}

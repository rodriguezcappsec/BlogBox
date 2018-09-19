import React, { Component } from "react";

export default class AuthModal extends Component {
  render() {
    return <React.Fragment>
        <div className="modal fade" id="auth-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Join In
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div>
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="pills-login-tab" data-toggle="pill" href="#login-tab" role="tab" aria-controls="pills-home" aria-selected="true">
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="pills-register-tab" data-toggle="pill" href="#register-tab" role="tab" aria-controls="pills-profile" aria-selected="false">
                        Register
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="login-tab" role="tabpanel" aria-labelledby="pills-home-tab">
                      <form id="logIn-form" onSubmit={this.props.onLogedIn}>
                        <div>
                          <div className="form-group row">
                            <label className="col-sm-4 col-form-label text-sm-right" htmlFor="login-email">
                              Email
                            </label>
                            <div className="col-md-5 col-sm-8">
                              <input onChange={e => this.props.getField(e, "signIn")} type="email" className="form-control" id="login-email" name="email" placeholder="Email" required />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-4 col-form-label text-sm-right" htmlFor="login-password">
                              Password
                            </label>
                            <div className="col-md-5 col-sm-8">
                              <input onChange={e => this.props.getField(e, "signIn")} type="password" className="form-control" id="login-password" name="password" placeholder="Password" required />
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="submit" className="btn">
                            Login
                          </button>
                          {/* <button type="button" id="close-modal" className="btn btn-secondary" data-dismiss="modal">
                            Close
                          </button> */}
                        </div>
                      </form>
                    </div>
                    <div className="tab-pane fade" id="register-tab" role="tabpanel" aria-labelledby="pills-profile-tab">
                      <form onSubmit={this.props.onRegister}>
                        <div>
                          <div className="form-group row">
                            <label className="col-sm-4 col-form-label text-sm-right" htmlFor="userName">
                              User Name
                            </label>
                            <div className="col-md-5 col-sm-8">
                              <input type="text" onChange={e => this.props.getField(e, "register")} className="form-control" id="userName" name="userName" placeholder="User Name" required />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-4 col-form-label text-sm-right" htmlFor="avatar">
                              Profile Picture
                            </label>
                            <div className="col-md-5 col-sm-8">
                              <label className="custom-file">
                                <input type="file" id="avatar" onChange={e => this.props.getField(e, "register")} name="avatar" className="custom-file-input" />
                                <span className="custom-file-control" />
                              </label>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-4 col-form-label text-sm-right" htmlFor="register-email">
                              Email
                            </label>
                            <div className="col-md-5 col-sm-8">
                            <input type="email" className="form-control" onChange={e => this.props.getField(e, "register")} id="register-email" name="email" placeholder="Email" required />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-4 col-form-label text-sm-right" htmlFor="register-password">
                              Password
                            </label>
                            <div className="col-md-5 col-sm-8">
                            <input type="password" className="form-control" onChange={e => this.props.getField(e, "register")} id="register-password" name="password" placeholder="Password" required />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-4 col-form-label text-sm-right" htmlFor="confirm-password">
                              Confirm Password
                            </label>
                            <div className="col-md-5 col-sm-8">
                            <input type="password" className="form-control" onChange={e => this.props.getField(e, "register")} id="confirm-password" name="password_confirmation" placeholder="Confirm Password" required />
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="submit" className="btn">
                            Register
                          </button>

                        </div>
                      </form>
                  </div>
                  <hr/>
                  <button type="button" id="close-modal" className="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                    {/* <div className="modal-footer"> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>;
  }
}

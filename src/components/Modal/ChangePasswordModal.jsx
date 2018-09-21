import React, { Component } from "react";

export default class ChangePasswordModal extends Component {
  render() {
    return <React.Fragment>
        <div className="modal fade" id="change-password-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Change Password
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="login-tab" role="tabpanel" aria-labelledby="pills-home-tab">
                    <form id="new-password-form" onSubmit={this.props.onChangePassword}>
                        <div>
                          <div className="form-group row">
                            <label className="col-sm-4 col-form-label text-sm-right" htmlFor="old-password">
                              Old Password
                            </label>
                            <div className="col-md-5 col-sm-8">
                            <input onChange={e => this.props.getField(e, "changePassword")} type="password" className="form-control" id="old-password" name="old" placeholder="Old Password" required />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-4 col-form-label text-sm-right" htmlFor="new-password">
                              New Password
                            </label>
                            <div className="col-md-5 col-sm-8">
                            <input onChange={e => this.props.getField(e, "changePassword")} type="password" className="form-control" id="new-password" name="new" placeholder="New password" required />
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="submit" className="btn btn-primary">
                            Login
                          </button>
                          <button type="button" id="changePass-close-modal" className="btn btn-secondary" data-dismiss="modal">
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>;
  }
}

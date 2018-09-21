import React, { Component } from 'react'

export default class CreateBlogModal extends Component {

  render() {
    return <React.Fragment>
        <div className="modal fade" id="create-blog-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  New Blog
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="login-tab" role="tabpanel" aria-labelledby="pills-home-tab">
                      <form id="new-blog-form" onSubmit={this.props.onNewBlog}>
                        <div>
                          <div className="form-group row">
                            <label className="col-sm-4 col-form-label text-sm-right" htmlFor="blog-title">
                              Title
                            </label>
                            <div className="col-md-5 col-sm-8">
                                                    <input onChange={e => this.props.getField(e, "newBlog")} type="text" className="form-control" id="blog-title" name="title" placeholder="Blog Title" required />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-4 col-form-label text-sm-right" htmlFor="blog-image">
                              Image
                            </label>
                            <div className="col-md-5 col-sm-8">
                              <label className="custom-file">
                                <input type="file" id="blog-image" onChange={e => this.props.getField(e, "newBlog")} name="image" className="custom-file-input" />
                                <span className="custom-file-control" />
                              </label>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-4 col-form-label text-sm-right" htmlFor="blog-article">
                              Article
                            </label>
                            <div className=" col-sm-8">
                              <textarea onChange={e => this.props.getField(e, "newBlog")} className="form-control" id="blog-article" name="article" placeholder="Article" required />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-4 col-form-label text-sm-right" htmlFor="blog-topic">
                              topic
                            </label>
                            <div className="col-md-5 col-sm-8">
                              <input type="text" onChange={e => this.props.getField(e, "newBlog")} className="form-control" id="blog-topic" name="topic" placeholder="Topic" required />
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                          <button type="button" id="newBlog-close-modal" className="btn btn-secondary" data-dismiss="modal">
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

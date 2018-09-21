import React, { Component } from 'react'

export default class MyProfile extends Component {
  render() {
    return (
      <React.Fragment>
            <div className="profile-wrapper">
                <div className="profile-section-user">
                    <div className="profile-info-brief p-3"><img className="img-fluid user-profile-avatar" src="../assets/global/images/profile-avatar-2.jpg"  alt="" />
                        <div className="text-center">
                            <h5 className="text-uppercase mb-4">Dwight Gully</h5>
                            {/* <p className="text-muted fz-base">I'm Dwight Gully a web developer and software engineer. I studied computer
          science and software engineering.</p> */}
                        </div>
                    </div>{/* /.profile-info-brief */}
                    {/* <div className="d-flex justify-content-center flex-wrap p-2"><button className="btn btn-success btn-sm m-2"><i className="fa fa-user-o mr-1" />
                        FOLLOW</button> <button className="btn btn-light btn-sm m-2 text-muted"><i className="fa fa-envelope-o mr-1" />
                            MESSAGE</button></div> */}
                    <div className="hidden-sm-down">
                        <hr className="m-0" />
                        <div className="profile-info-contact p-4">
                            <h6 className="mb-3">Contact Information</h6>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td><strong>EMAIL:</strong></td>
                                        <td>
                                            <p className="text-muted mb-0">rathemes@gmail.com</p>
                                        </td>
                                    </tr>
                                </tbody></table>
                        </div>{/* /.profile-info-contact */}
                        <hr className="m-0" />
                    </div>{/* /.hidden-sm-down */}
                </div>{/* /.profile-section-user */}
                <div className="profile-section-main">
                    {/* Nav tabs */}
                    <ul className="nav nav-tabs profile-tabs" role="tablist">
                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#My-blogs" role="tab">My blogs</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#My-favorite-blogs" role="tab">Favorite blogs</a></li>
                    </ul>{/* /.nav-tabs */}
                    {/* Tab panes */}
                    <div className="tab-content profile-tabs-content">
                        <div className="tab-pane active" id="My-blogs" role="tabpanel">
                            {/* <div className="post-editor"><textarea name="post-field" id="post-field" className="post-field" placeholder="Write Something Cool!" defaultValue={""} />
                                <div className="d-flex">
                                    <div className="mr-auto"><button className="btn btn-sm btn-light mr-1"><i className="fa fa-camera" /></button>
                                        <button className="btn btn-sm btn-light mr-1"><i className="fa fa-link" /></button> <button className="btn btn-sm btn-light mr-1"><i className="fa fa-film" /></button> <button className="btn btn-sm btn-light mr-1"><i className="fa fa-code" /></button></div><button className="btn btn-success px-4 py-1">Post</button>
                                </div>
                            </div> */}
                            <div className="stream-posts">
                                <div className="stream-post">
                                    <div className="sp-author"><a  href="" className="sp-author-avatar"><img src="../assets/global/images/101.jpg"  alt="" /></a>
                                        <h6 className="sp-author-name"><a  href="">John Doe</a></h6>
                                    </div>
                                    <div className="sp-content">
                                        <div className="sp-info">posted 1h ago</div>
                                        <p className="sp-paragraph mb-0">Auk Soldanella plainscraft acetonylidene wolfishness irrecognizant
                                          Candolleaceae provision Marsipobranchii arpen Paleoanthropus supersecular inidoneous
                                          autoplagiarism palmcrist occamy equestrianism periodontoclasia mucedin overchannel goelism
                decapsulation pourer zira</p>
                                    </div>{/* /.sp-content */}
                                </div>{/* /.stream-post */}
                            </div>{/* /.stream-posts */}
                        </div>{/* /#profile-overview */}
                        <div className="tab-pane" id="My-favorite-blogs" role="tabpanel">
                            <div className="edit-cover mb-4"><img className="img-fluid" src="../assets/global/images/profile-cover-2.jpg"  alt="" />
                                <button className="btn btn-sm btn-success px-4">Edit</button></div>{/* /.edit-cover */}
                            <div className="row">
                                <div className="col-xl-2 col-md-3">
                                    <div className="d-flex flex-wrap align-content-start justify-content-between">
                                        <div><a  href=""><img src="../assets/global/images/profile-avatar-2.jpg"  alt="" className="img-thumbnail mb-3" /></a>
                                            <div><button className="btn btn-primary btn-sm px-3 mr-2">Edit</button> <button className="btn btn-success btn-sm">X</button></div>
                                        </div>
                                        <div className="mt-5">
                                            <div className="mb-3"><strong>Your Gender:</strong></div><label className="d-block custom-control custom-radio"><input id="radio1" name="radio" className="custom-control-input" type="radio" /> <span className="custom-control-indicator" />
                                                <span className="custom-control-description">Male</span></label><label className="d-block custom-control custom-radio"><input id="radio2" name="radio" defaultChecked="checked" className="custom-control-input" type="radio" /> <span className="custom-control-indicator" /> <span className="custom-control-description">Female</span></label>
                                        </div>
                                    </div>{/* /.d-flex */}
                                </div>{/* /.col- */}
                                <div className="col-xl-10 col-md-9">
                                    <form action="#">
                                        <h5 className="my-4">Basic Information</h5>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"><label htmlFor="edit__name">YOUR NAME</label><input id="edit__name" className="form-control" defaultValue="DWIGHT GULLY" type="text" /></div>
                                            </div>{/* /.col- */}
                                            <div className="col-md-6">
                                                <div className="form-group"><label htmlFor="edit__password">YOUR PASSWORD</label><input id="edit__password" className="form-control" defaultValue="fake-password" type="password" /></div>
                                            </div>{/* /.col- */}
                                            <div className="col-md-12"><label htmlFor="edit__bio">WHO AM I</label><textarea name="edit__bio" id="edit__bio" className="form-control" rows={6} defaultValue={"vichyssoise aetheogamous care callosal prothetically Iberism stratospherical eozoon gentianose spermotoxin bibitory pterotheca unportraited trimodal benzol"} /></div>
                                        </div>{/* /.row */}
                                        <h5 className="my-4 profile-edit-section-heading">Contact Information</h5>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"><label htmlFor="edit__email">EMAIL</label><input id="edit__email" className="form-control" defaultValue="someone@example.com" type="email" /></div>
                                            </div>{/* /.col- */}
                                            <div className="col-md-6">
                                                <div className="form-group"><label htmlFor="edit__website">WEBSITE</label><input id="edit__website" className="form-control" defaultValue="http://www.example.com" type="url" /></div>
                                            </div>{/* /.col- */}
                                            <div className="col-md-6">
                                                <div className="form-group"><label htmlFor="edit__phone">PHONE</label><input id="edit__phone" className="form-control" defaultValue="000-5421-524" type="text" /></div>
                                            </div>{/* /.col- */}
                                            <div className="col-md-6">
                                                <div className="form-group"><label htmlFor="edit__skype">SKYPE</label><input id="edit__skype" className="form-control" defaultValue="myskype" type="text" /></div>
                                            </div>{/* /.col- */}
                                        </div>{/* /.row */}
                                        <h5 className="my-4 profile-edit-section-heading">General Information</h5>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"><label htmlFor="edit__job">JOB</label><input id="edit__job" className="form-control" defaultValue="Web Developer" type="text" /></div>
                                            </div>{/* /.col- */}
                                            <div className="col-md-6">
                                                <div className="form-group"><label htmlFor="edit__position">POSITION</label><input id="edit__position" className="form-control" defaultValue="Team Manager" type="text" /></div>
                                            </div>{/* /.col- */}
                                            <div className="col-md-6">
                                                <div className="form-group"><label htmlFor="edit__major">STUDIED</label><input id="edit__major" className="form-control" defaultValue="computer science" type="text" /></div>
                                            </div>{/* /.col- */}
                                            <div className="col-md-6">
                                                <div className="form-group"><label htmlFor="edit__school">HIGH SCHOOL</label><input id="edit__school" className="form-control" defaultValue="Fake High school" type="text" /></div>
                                            </div>{/* /.col- */}
                                        </div>{/* /.row */}
                                        <div className="row">
                                            <div className="col-md-12"><button className="btn btn-block btn-success mt-5">Save</button></div>{/* /.col- */}
                                        </div>{/* /.row */}
                                    </form>
                                </div>{/* /.col- */}
                            </div>{/* /.row */}
                        </div>{/* /#profile-settings */}
                    </div>{/* /.tab-content */}
                </div>{/* /.profile-section-main */}
            </div>

      </React.Fragment>
    )
  }
}

import React, { Component } from "react";
import Zoom from "@material-ui/core/Zoom";
import Comments from "./Comments";
export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogID: this.props.location.state.id
    };
  }
  render() {
    return (
      <React.Fragment>
        <Zoom
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: 500 }}
        >
          <div>
            <div className="card mb-5 bg-faded p-2 widget-blog-post">
              <div className="cover">
                <img
                  className="card-img-top"
                  src="../assets/global/images/blog-img-05.jpg"
                  alt="Card image cap"
                />
                <div className="cover-overlay">
                  <img
                    className="avatar-floating-left avatar avatar-circle avatar-xl"
                    src="../assets/global/images/217.jpg"
                    alt
                  />
                </div>
              </div>
              <div className="card-body mt-4">
                <h5 className="mb-4">This Is A Random Post Heading</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                  obcaecati autem, fuga enim officia nulla blanditiis sed,
                  veritatis rerum eum eligendi impedit ut. Magni unde,
                  architecto! Iusto delectus earum tempore perferendis labore
                  tempora ratione inventore ut mollitia pariatur quod animi,
                  neque voluptatem quam quasi aperiam, aliquam explicabo
                  consectetur voluptatum, culpa.
                </p>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Numquam aliquid accusamus, eius. Molestias totam excepturi
                  consequuntur recusandae suscipit deleniti, a vero dolore
                  mollitia voluptate repellendus autem porro quia obcaecati
                  dolores doloremque aut nostrum itaque quos asperiores! Modi
                  quae ab dolorum nisi temporibus cupiditate, reiciendis in
                  distinctio error labore perspiciatis, ullam quas ad sit,
                  soluta deserunt a at placeat! Sed atque, perspiciatis saepe
                  yklkmanin. Eum vitae, unde delectus ullam aliquam enim
                  cupiditate? Fugit perspiciatis, dignissimos aperiam incidunt,
                  sequi quas nisi nihil asperiores optio adipisci quam amet
                  quidem hic harum cumque autem sed at minus earum? Voluptas sed
                  pariatur quisquam. Doloremque architecto totam, aliquid vero
                  quasi quia quae, veritatis in illum fuga eaque cumque nisi,
                  dolorem dicta minus. Adipisci quas deleniti ratione.
                </p>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Numquam aliquid accusamus, eius. Molestias totam excepturi
                  consequuntur recusandae suscipit deleniti, a vero dolore
                  mollitia voluptate repellendus autem porro quia obcaecati
                  dolores doloremque aut nostrum itaque quos asperiores! Modi
                  quae ab dolorum nisi temporibus cupiditate, reiciendis in
                  distinctio error labore perspiciatis, ullam quas ad sit,
                  soluta deserunt a at placeat! Sed atque, perspiciatis saepe
                  sequi. Eum vitae, unde delectus ullam aliquam enim cupiditate?
                  Fugit perspiciatis, dignissimos aperiam incidunt, sequi quas
                  nisi nihil asperiores optio adipisci quam amet quidem hic
                  harum cumque autem sed at minus earum? Voluptas sed pariatur
                  quisquam. Doloremque architecto totam, aliquid vero quasi quia
                  quae, veritatis in illum fuga eaque cumque nisi, dolorem dicta
                  minus. Adipisci quas deleniti ratione.
                </p>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ratione perspiciatis possimus aut.
                </p>
              </div>
            </div>
            {/* /.card */}
            <div className="text-center">
              <button className="btn btn-lg btn-success px-5 py-3">
                LEAVE A COMMENT
              </button>
            </div>
            <Comments />
          </div>
        </Zoom>
      </React.Fragment>
    );
  }
}

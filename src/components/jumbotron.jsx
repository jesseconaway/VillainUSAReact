import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-10 mx-auto">
            <div className="card-image-overlay">
              <h3 className="card-title">
                VillainUSA provides high quality customizable weightlifting and
                functional fitness equipment at an affordable price
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card-image-overlay">
              <p className="card-text">
                <Link className="btn btn-danger float-right" to="/info/contact">
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card-image-overlay">
              <p className="card-text">
                <Link
                  className="btn btn-danger"
                  to="/info/productionFacilities"
                >
                  About Us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;

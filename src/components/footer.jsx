import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Footer(props) {
  return (
    <div className="row footer pt-3 mx-0">
      <div className="col-6 col-sm-4">
        <Link to={"/info/customization"} className="d-block">
          Customization
        </Link>
        <Link to={"/info/placingAnOrder"} className="d-block">
          Placing an Order
        </Link>
        <Link to={"/info/productionFacilities"} className="d-block">
          Production Facilities
        </Link>
      </div>
      <div className="col-6 col-sm-4">
        <Link to={"/info/shipping"} className="d-block">
          Shipping
        </Link>
        <Link to={"/info/productPolicies"} className="d-block">
          Product Policies
        </Link>
        <Link to={"/info/contact"} className="d-block">
          Contact Us
        </Link>
      </div>
      <div className="col-6 col-sm-4">
        <h1 className="d-block mb-0">
          <Link to={"/home"}>VillainUSA</Link>
        </h1>
        <p className="d-block">©2019 VillainUSA LLC</p>
      </div>
    </div>
  );
}

export default Footer;

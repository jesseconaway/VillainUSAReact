import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Contact from "./infoPages/contact";
import Customization from "./infoPages/customization";
import PlacingAnOrder from "./infoPages/placingAnOrder";
import ProductPolicies from "./infoPages/productPolicies";
import ProductionFacilities from "./infoPages/productionFacilities";
import Shipping from "./infoPages/shipping";

function InfoPages(props) {
  return (
    <div className="container my-3 my-md-5">
      <div className="row">
        <div className="col-12 col-lg-3">
          <div className="nav info-nav flex-column my-3 my-md-0">
            <Link className="nav-link" to="/info/contact">
              Contact
            </Link>
            <Link className="nav-link" to="/info/customization">
              Customization
            </Link>
            <Link className="nav-link" to="/info/placingAnOrder">
              Placing An Order
            </Link>
            <Link className="nav-link" to="/info/productPolicies">
              Product Policies
            </Link>
            <Link className="nav-link" to="/info/productionFacilities">
              Production Facilities
            </Link>
            <Link className="nav-link" to="/info/shipping">
              Shipping
            </Link>
          </div>
        </div>
        <div className="col-12 col-lg-9">
          <Switch>
            <Route path="/info/contact" component={Contact} />
            <Route path="/info/customization" component={Customization} />
            <Route path="/info/placingAnOrder" component={PlacingAnOrder} />
            <Route path="/info/productPolicies" component={ProductPolicies} />
            <Route
              path="/info/productionFacilities"
              component={ProductionFacilities}
            />
            <Route path="/info/shipping" component={Shipping} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default InfoPages;

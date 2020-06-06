import React from "react";

function ProductionFacilities(props) {
  return (
    <div>
      <h1>Production Facilities</h1>
      <p>
        Our production facilities are located in Fuijan, China. In addition to
        producing the Villain USA equipment, we do OEM manufacturing for other
        highly popular worldwide fitness brands.
      </p>
      <p>
        The company has over the 10 years of its development emerged as a leader
        in the silicone rubber industry. As an aggressive and innovative custom
        made rubber silicone parts manufacturing company, we specialize in
        molded, extruded and die-cut products. We employ a wide range of
        high-tech, state of the art processing techniques like injection,
        molding, extrusion, blowing etc.
      </p>
      <p>
        We combine innovation and system capabilities with experience to create
        faster and more flexible lead times, higher quality manufactured
        products, and an overall reduction in total cost to our customers.
      </p>
      <div className="row">
        <div className="col-12 col-md-6">
          <img
            className="w-100"
            src={require(`../../assets/${"factory1"}.jpg`)}
            alt="villain USA production weightlifting equipment facilities"
          />
          <img
            className="w-100"
            src={require(`../../assets/${"factory2"}.jpg`)}
            alt="villain USA production weightlifting equipment facilities"
          />
        </div>
        <div className="col-12 col-md-6">
          <img
            className="w-100"
            src={require(`../../assets/${"factory3"}.jpg`)}
            alt="villain USA production weightlifting equipment facilities"
          />
          <img
            className="w-100"
            src={require(`../../assets/${"factory4"}.jpg`)}
            alt="villain USA production weightlifting equipment facilities"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductionFacilities;

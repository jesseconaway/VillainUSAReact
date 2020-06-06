import React from "react";

function Xendurance(props) {
  return (
    <div class="container my-3 my-lg-5">
      <div class="row">
        <div class="col-12 col-lg-9 mx-auto">
          <a
            href="http://shop.teamxnd.com/VillainUSA/Home/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../assets/xendurance.png")}
              alt="VillainUSA Xendurance Supplement link"
              className="w-100 mb-3"
            />
          </a>
          <p>
            Xendurance is a sport nutrition company whose purpose is to
            revolutionize the positive impact of your athletic performance with
            our sports supplements that have been created for athletes, by
            athletes. Catering to the pre-workout and recovery needs of athletes
            like you from around the world, including CrossFit Games athlete
            Josh Bridges, Xendurance's supplements have been tested to ensure no
            banned substances are included in order to provide competing
            athletes the ultimate peace of mind when it comes to what they put
            into their bodies.
          </p>
          <p>
            We are thrilled to proclaim that our Extreme Endurance sports
            nutrition supplement has a Gold-Standard, third party, double-blind,
            placebo-controlled, published, crossover study on a sports nutrition
            product.
          </p>
          <p>
            So whether you are looking to reduce lactic acid build up in your
            muscles while you workout and recover or to remain hydrated with
            electrolytes during your event, Xendurance is here to help and
            provide you with sport nutrition supplements that actually do work.
          </p>
          <p>
            <strong>
              Shipping on Xendurance supplements is available only in the
              continental United States.
            </strong>
          </p>
          <p>
            <a
              href="http://shop.teamxnd.com/VillainUSA/Home/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-danger my-2 my-sm-0"
            >
              Shop Xendurance Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Xendurance;

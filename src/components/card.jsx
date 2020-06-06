import React from "react";
import { Link } from "react-router-dom";

function Card({ caption, route, image }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mt-3 mb-3">
      <Link to={route} className="card">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="card-img"
          alt={caption}
        >
          <div className="card-img-overlay">
            <h3 className="card-title m-auto text-center">{caption}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;

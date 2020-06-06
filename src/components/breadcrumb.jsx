import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb(props) {
  const { routeParts, current } = props;

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link className="link-text-dark" to="/home">
            Home
          </Link>
        </li>
        {routeParts ? (
          <li className="breadcrumb-item">
            <Link className="link-text-dark" to={`/products/:${routeParts}`}>
              {routeParts}
            </Link>
          </li>
        ) : null}
        <li className="breadcrumb-item active" aria-current={current}>
          {current}
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;

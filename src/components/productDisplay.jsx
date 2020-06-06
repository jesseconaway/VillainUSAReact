import React from "react";
import {
  getProducts,
  getAllProducts,
  searchProducts,
} from "../inventory/inventory";
import { Link } from "react-router-dom";
import Breadcrumb from "./breadcrumb";
import queryString from "query-string";

function ProductDisplay(props) {
  const { params } = props.match;
  const { search } = props.location;

  const { query } = queryString.parse(search);

  const categoryName =
    Object.keys(params).length > 0
      ? params.category.replace(":", "")
      : "products";

  let productList;
  if (categoryName === "products" && search === "") {
    productList = getAllProducts();
  } else if (categoryName === "products" && search !== "") {
    productList = searchProducts(query);
  } else {
    productList = getProducts(categoryName);
  }

  return (
    <>
      <Breadcrumb current={categoryName} />
      <div className="container">
        <div className="row">
          {productList.length > 0 ? (
            productList.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3 my-3">
                <Link
                  className="link-text"
                  to={`/products/:${product.categories}/:${product.id}`}
                >
                  <img
                    src={require(`../assets/${product.img}.jpg`)}
                    alt={product.name}
                    className="w-100"
                  />
                  <h3 className="text-center">{product.name}</h3>
                </Link>
              </div>
            ))
          ) : (
            <h1>No Products Found</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;

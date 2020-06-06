import React from "react";

function AddToCartButton({ product, url, disabled }) {
  return (
    <button
      className={
        disabled
          ? "btn btn-danger snipcart-add-item my-3"
          : "btn btn-danger snipcart-add-item my-3 disabled"
      }
      data-item-id={product.id}
      data-item-name={product.name}
      data-item-price={product.price}
      data-item-weight={product.weight}
      data-item-url="http://villainusa.com"
      data-item-categories={product.categories}
      data-item-image={
        product.img ? require(`../assets/${product.img}.jpg`) : ""
      }
      data-item-width={product.width}
      data-item-length={product.length}
      data-item-height={product.height}
      data-item-quantity={product.quantity}
      data-item-custom2-name={product.custom2Name ? product.custom2Name : ""}
      data-item-custom2-options={
        product.custom2Options ? product.custom2Options : ""
      }
      data-item-custom2-value={product.custom2Value ? product.custom2Value : ""}
    >
      Add To Cart
    </button>
  );
}

export default AddToCartButton;

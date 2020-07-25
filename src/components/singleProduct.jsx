import React, { Component } from "react";
import { getProduct, getSubsetProduct } from "./../inventory/inventory";
import Carousel from "./carousel";
import Modal from "./modal";
import Table from "./table";
import { getProducts } from "../inventory/inventory";
import { Link } from "react-router-dom";
import Breadcrumb from "./breadcrumb";
import AddToCartButton from "./addToCartButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class SingleProduct extends Component {
  state = {
    foundProduct: {},
    productImages: [],
    relatedProducts: [],
    currentProduct: {},
  };

  constructor(props) {
    super(props);
    this.state.foundProduct = getProduct(
      props.match.params.id.replace(":", "")
    );
    this.state.currentProduct = this.state.foundProduct;
  }

  componentDidMount() {
    this.getProductImages();
    this.getRelatedProducts();
  }

  getRelatedProducts = () => {
    const { foundProduct } = this.state;
    let relatedProducts = getProducts(foundProduct.categories).filter(
      (item) => item.id !== foundProduct.id
    );
    const backupProducts =
      relatedProducts.length < 4
        ? getProducts("barbells").slice(0, 4 - relatedProducts.length)
        : [];
    relatedProducts = [...relatedProducts, ...backupProducts];
    this.setState({ relatedProducts });
  };

  getProductImages = () => {
    const { foundProduct } = this.state;
    let productImages = [];
    let i = 1;
    while (i < 12) {
      try {
        productImages.push(require(`../assets/${foundProduct.id}${i}.jpg`));
        i++;
        continue;
      } catch (error) {
        console.log("it's okay");
        break;
      }
    }
    this.setState({ productImages });
  };

  setCurrentProduct = (id) => {
    const currentProduct = getSubsetProduct(this.state.foundProduct.id, id);
    currentProduct.outOfStock && toast.warning(`${currentProduct.name} is currently available only for preorder. Order fulfillment will take 6-8 weeks`);
    this.setState({ currentProduct });
  };

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    const foundProduct = getProduct(id.replace(":", ""));
    if (id !== prevProps.match.params.id) {
      this.setState({
        foundProduct,
        currentProduct: foundProduct,
      });
    }
    if (this.state.foundProduct !== prevState.foundProduct) {
      this.getProductImages();
      this.getRelatedProducts();
    }
  }

  render() {
    const { params, url } = this.props.match;
    let {
      foundProduct,
      productImages,
      relatedProducts,
      currentProduct,
    } = this.state;

    return (
      <>
        <Breadcrumb
          current={foundProduct.name}
          routeParts={params.category.replace(":", "")}
        />
        <ToastContainer />
        <div className="container my-4">
          <div className="outOfStockAlert">{currentProduct.outOfStock ? `${currentProduct.name} is currently available only for preorder. Order fulfillment will take 6-8 weeks` : null}</div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div
                className="singleProductMainImg mb-4 mb-lg-0"
                data-toggle="modal"
                data-target="#productsModal"
              >
                <div>
                  <img
                    src={require(`../assets/${currentProduct.img}.jpg`)}
                    alt="Villain USA product"
                  />
                  <div className="touchIcon">
                    <img
                      src={require("../assets/fullscreen.png")}
                      alt="villain usa click for more images"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Modal
              content={
                <Carousel
                  images={productImages}
                  interval="false"
                  ride="false"
                />
              }
              title={foundProduct.name}
              id="productsModal"
            />

            <div className="col-12 col-lg-6">
              <Table
                data={foundProduct.specs}
                Price={`$${currentProduct.price}`}
              />

              {foundProduct.data ? (
                <div className="form-group mt-2">
                  <label htmlFor="productSelect">Select Product</label>
                  <select
                    onChange={(e) => this.setCurrentProduct(e.target.value)}
                    className="form-control"
                    name="productSelect"
                    id="productSelect"
                    defaultValue="Select Product"
                  >
                    <option disabled value="Select Product">
                      - Select Product -
                    </option>
                    {foundProduct.data.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                  <div className="d-none" />
                )}
              <AddToCartButton
                product={currentProduct}
                url={url}
                disabled={currentProduct.width}
              />
            </div>
          </div>
          {/* ------------
        RELATED PRODUCTS
        ------------ */}
          <div className="row">
            <h2 className="relatedProductsHeader">RELATED PRODUCTS</h2>
          </div>
          <div className="row">
            {relatedProducts.map((product) => {
              if (relatedProducts.indexOf(product) > 3) {
                return null;
              }
              return (
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
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default SingleProduct;

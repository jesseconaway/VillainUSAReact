import React, { Component } from "react";
import Navbar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import ProductDisplay from "./components/productDisplay";
import Footer from "./components/footer";
import SingleProduct from "./components/singleProduct";
import InfoPages from "./components/infoPages";
import Xendurance from "./components/xendurance";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/products/:category/:id" component={SingleProduct} />
          <Route path="/products/:category" component={ProductDisplay} />
          <Route path="/products" component={ProductDisplay} />
          <Route path="/xendurance" component={Xendurance} />
          <Route path="/info" component={InfoPages} />
          <Route path="/home" component={Home} />
          <Redirect from="/" exact to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

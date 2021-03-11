import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import cart from "../assets/cart.png";

class Navbar extends Component {
  searchValue = React.createRef();
  navToggle = React.createRef();

  componentDidUpdate(prevProps) {
    if (window.innerWidth < 992 && !this.navToggle.current.classList.contains('collapsed') && this.props.location !== prevProps.location) {
      this.navToggle.current.click();
    }
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(
      `/products/?query="${this.searchValue.current.value}"`
    );
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* -------BRAND------- */}
        <Link className="navbar-brand nav-link" to="/home">
          VillainUSA
        </Link>
        {/* -------MOBILE TOGGLE------- */}
        <button
          ref={this.navToggle}
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* -------DROPDOWN------- */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#nowhere"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All Categories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/products/:aerobic">
                  Agility & Aerobic Training
                </NavLink>
                <NavLink className="dropdown-item" to="/products/:collars">
                  Barbell Collars
                </NavLink>
                <NavLink className="dropdown-item" to="/products/:barbells">
                  Barbells
                </NavLink>
                <NavLink className="dropdown-item" to="/products/:bodyweight">
                  Bodyweight Training
                </NavLink>
                <NavLink className="dropdown-item" to="/products/:outfitting">
                  Racks & Gym Outfitting
                </NavLink>
                <NavLink className="dropdown-item" to="/products/:boxes">
                  Jump Boxes
                </NavLink>
                <NavLink className="dropdown-item" to="/products/:kettlebells">
                  Kettlebells
                </NavLink>
                <NavLink className="dropdown-item" to="/products/:mobility">
                  Mobility
                </NavLink>
                <NavLink className="dropdown-item" to="/products/:plates">
                  Plates
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  to="/products/:strengthEquipment"
                >
                  Strength Equipment
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  to="/products/:weightliftingGear"
                >
                  Weightlifting Gear & Apparel
                </NavLink>
                <NavLink className="dropdown-item" to="/xendurance">
                  Xendurance Supplements
                </NavLink>
              </div>
            </li>
            {/* -------NAV ITEMS------- */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/products/:barbells">
                Barbells
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products/:bodyweight">
                Bodyweight
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products/:weightliftingGear">
                Gear & Apparel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products/:mobility">
                Mobility
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products/:plates">
                Plates
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/xendurance">
                Supplements
              </NavLink>
            </li>
          </ul>
          {/* -------SEARCH------- */}
          <form
            onSubmit={this.handleSubmit}
            className="form-inline my-2 my-lg-0"
          >
            <input
              ref={this.searchValue}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-danger my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <div className="mx-3 snipcart-checkout cartIcon">
            <img
              className="w-100 h-auto"
              src={cart}
              alt="Villain USA shopping cart"
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);

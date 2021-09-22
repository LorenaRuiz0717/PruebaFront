import React from "react";
import logo from "../assest/logo.png";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons';
// import 'bootstrap/dist/css/bootstrap.css';'

// import carrito from "../assest/carrito.png";

function Header() {
  return (
    <div className="contenedorNav">
      <img src={logo} alt="logo" width="200"></img>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <form className="d-flex">
            <div className="buscador">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                 className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
          <i className="bi bi-cart3"></i> 
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <div className="datos">
            <h3>Lorena</h3>
            <h4>pefil</h4>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

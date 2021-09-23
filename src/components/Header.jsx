import React from "react";
import logo from "../assest/logo.png";
import lupa from "../assest/lupa.png";
import perfil from '../assest/perfil.png'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons';
// import 'bootstrap/dist/css/bootstrap.css';'

// import carrito from "../assest/carrito.png";

function Header() {
  return (
    <div className="contenedorNav">
      <img src={logo} alt="logo" width="200"></img>
      {/* <nav className='nav'> */}
          {/* <form 
          // className="d-flex"
          > */}
            <div className="contentbuscador">
              <input
              className='buscador'
               
              //  className="form-control me-2"
                type="search"
                placeholder='Busca marcas y productos...  '
                aria-label="Search"
              />
              <button
              className='btnBuscador'
              //  className="btn btn-outline-success"
                type="submit">
                  {/* <img className='lupa' src={lupa} alt='imgperfil'></img> */}
              <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          {/* </form> */}
           <div className="datos">
           <h3>Lorena</h3>

            <img className='imgPerfil' src={perfil} alt='imgperfil'></img>
          
          </div>
     
    </div>
  );
}

export default Header;

import React from "react";
import logo from "../assest/logo.png";
import perfil from "../assest/perfil.png";
import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <div className="contenedorNav">
      <img src={logo} alt="logo" width="200"></img>
      <div className="contentbuscador">
        <input
          className="buscador"
          type="search"
          placeholder="Busca marcas y productos...  "
          aria-label="Search"
        />
        <BsSearch className="lupa" />
      </div>
      <div className="datos">
        <h3>Lorena</h3>

        <img className="imgPerfil" src={perfil} alt="imgperfil"></img>
      </div>
    </div>
  );
}

export default Header;

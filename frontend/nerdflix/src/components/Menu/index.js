import React from "react";
import logoImg from "../../assets/logo.png";
import Button from "../Button";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logoImg} alt="Imagem da Logo" />
      </a>
      <Button className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
};

export default Menu;

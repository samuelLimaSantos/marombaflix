import React from "react";
import logoImg from "../../assets/logo.png";
import { ButtonLink, MenuWrapper, LogoImage } from "./style.js";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage className="Logo" src={logoImg} alt="Imagem da Logo" />
      </Link>
      <ButtonLink className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </ButtonLink>
    </MenuWrapper>
  );
};

export default Menu;

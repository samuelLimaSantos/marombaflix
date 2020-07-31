import React from "react";
import logoImg from "../../assets/logo.png";
import { ButtonLink, MenuWrapper, LogoImage } from "./style.js";

const Menu = () => {
  return (
    <MenuWrapper className="Menu">
      <a href="/">
        <LogoImage className="Logo" src={logoImg} alt="Imagem da Logo" />
      </a>
      <ButtonLink className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </ButtonLink>
    </MenuWrapper>
  );
};

export default Menu;

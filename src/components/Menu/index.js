import React, { useEffect } from "react";
import logoImg from "../../assets/logo.png";
import { ButtonLink, MenuWrapper, LogoImage } from "./style.js";
import { Link } from "react-router-dom";

const Menu = () => {
  useEffect(() => {
    const menu = document.querySelector("#Menu");

    window.addEventListener("scroll", () => {
      const pagePosition = window.pageYOffset;
      if (pagePosition === 0) {
        menu.style.background =
          "linear-gradient(180deg, rgba(0,0,0,0.950) 5%, transparent 100%)";
      }
      if (pagePosition > 0) {
        menu.style.transition = "1s";
        menu.style.animation = "fadeBottom 1s ease-in";
        menu.style.background =
          "linear-gradient(180deg, rgba(0,0,0,0.950) 80%, transparent 100%)";

        menu.style.borderBottom = "none";
      }
    });
  }, []);

  return (
    <MenuWrapper className="Menu" id="Menu">
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

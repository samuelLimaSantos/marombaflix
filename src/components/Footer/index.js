import React from "react";
import { FooterBase, ImageLogo } from "./styles";
import logoImage from "../../assets/logo.png";

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <ImageLogo src={logoImage} alt="Logo NerdFLix" />
      </a>
      <p>
        Orgulhosamente criado durante a{" "}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;

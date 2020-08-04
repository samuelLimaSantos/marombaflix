import React from "react";
import { FooterBase, ImageLogo, SocialMedia } from "./styles";
import logoImage from "../../assets/logo.png";
import githubLogo from "../../assets/githubLogo.svg";
import linkedinLogo from "../../assets/linkedinLogo.svg";

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
      <div>
        <p>Desenvolvido com amor por Samuel Santos ❤️</p>
        <SocialMedia>
          <a href="https://github.com/samuelLimaSantos" target="_blank">
            <SocialMedia.Img src={githubLogo} alt="Link Github autor" />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-santos-036375174/"
            target="_blank"
          >
            <SocialMedia.Img src={linkedinLogo} alt="Link Linkedin autor" />
          </a>
        </SocialMedia>
      </div>
    </FooterBase>
  );
}

export default Footer;

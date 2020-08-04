import styled from "styled-components";

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const ImageLogo = styled.img`
  width: 150px;
  @media (max-width: 800px) {
    width: 100px;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  width: 25%;
  margin: 0 auto;
  max-width: 100px;
`;

SocialMedia.Img = styled.img`
  width: 30px;
`;

import React from "react";
import Footer from "../Footer";
import Menu from "../Menu";
import { Main } from "./style";

const PageDefault = ({ children, paddingAll }) => {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefault;

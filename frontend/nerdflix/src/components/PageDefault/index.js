import React from "react";
import Footer from "../Footer";
import Menu from "../Menu";
import { Main } from "./style";

const PageDefault = ({ children }) => {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefault;

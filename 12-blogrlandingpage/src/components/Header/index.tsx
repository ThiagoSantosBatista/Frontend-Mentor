import React from "react";
import * as S from "./styles";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";

const Header = () => {
  return (
    <S.Header>
      <S.Box>
        <Logo />
        <nav>
          <S.List>
            <li>Product</li>
            <li>Company</li>
            <li>Connect</li>
          </S.List>
        </nav>
      </S.Box>
      <S.List>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </S.List>
    </S.Header>
  );
};

export default Header;

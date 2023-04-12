import React from "react";
import * as S from "./styles";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { ReactComponent as HeaderArrow } from "../../assets/icons/icon-arrow-light.svg";

const Header = () => {
  return (
    <S.Header>
      <S.Box>
        <Logo />
        <nav>
          <S.List>
            <li>
              Product <HeaderArrow />
            </li>
            <li>Company <HeaderArrow /></li>
            <li>Connect <HeaderArrow /></li>
          </S.List>
        </nav>
      </S.Box>
      <S.List>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <S.Button as='a' href="#">Sign Up</S.Button>
        </li>
      </S.List>
    </S.Header>
  );
};

export default Header;

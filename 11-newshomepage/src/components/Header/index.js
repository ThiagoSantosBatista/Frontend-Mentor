import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { HeaderContainer, NavList } from "./style";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <nav>
                <NavList>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">New</a></li>
                  <li><a href="#">Popular</a></li>
                  <li><a href="#">Trending</a></li>
                  <li><a href="#">Categories</a></li>
                </NavList>
            </nav>
        </HeaderContainer>
    );
};

export default Header;

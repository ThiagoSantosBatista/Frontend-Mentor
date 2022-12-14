import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { HeaderContainer, NavList, NavListMobile } from "./style";
import { ReactComponent as MenuAbrir } from "../../assets/icon-menu.svg";
import { ReactComponent as MenuFechar } from "../../assets/icon-menu-close.svg";

const Header = () => {
    const [menu, setMenu] = React.useState(false);

    return (
        <HeaderContainer id="home" menu={menu}>
            <Logo />
            <nav>
                <NavList>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#home">New</a>
                    </li>
                    <li>
                        <a href="#home">Popular</a>
                    </li>
                    <li>
                        <a href="#home">Trending</a>
                    </li>
                    <li>
                        <a href="#home">Categories</a>
                    </li>
                </NavList>
                {menu && <span className="headerBg"></span>}
                {!menu && (
                    <button className="btnAbrir" aria-label="Abrir Menu" onClick={() => setMenu(true)} >
                        <MenuAbrir />
                    </button>
                )}
                {menu && (
                    <button className="btnFechar" aria-label="Fechar Menu" onClick={() => setMenu(false)}>
                        <MenuFechar />
                    </button>
                )}
                {menu && (
                    <NavListMobile>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#home">New</a>
                        </li>
                        <li>
                            <a href="#home">Popular</a>
                        </li>
                        <li>
                            <a href="#home">Trending</a>
                        </li>
                        <li>
                            <a href="#home">Categories</a>
                        </li>
                    </NavListMobile>
                )}
            </nav>
        </HeaderContainer>
    );
};

export default Header;

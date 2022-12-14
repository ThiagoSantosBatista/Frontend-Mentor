import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7rem 14rem 5rem;

    button {
        position: absolute;
        top: 2rem;
        right: 5.73%;
        transform: translateY(50%);
        display: none;
        cursor: pointer;
        z-index: 10;
        border: none;
        background: none;
    }
    .btnFechar {
        position: fixed;
    }
    .headerBg {
        display: block;
    }

    @media screen and (max-width: 1440px) {
        padding: 7rem 9.73% 5rem;
    }
    @media screen and (max-width: 1340px) {
        padding: 7rem 5.73% 5rem;
    }
    @media screen and (max-width: 768px) {
        position: relative;
        padding: 2rem 5.73% 4rem;

        button {
            display: block;
        }
        .headerBg {
            position: fixed;
            top: 0;
            left: 0;
            background: black;
            height: 100vh;
            width: 100%;
            z-index: 3;
            opacity: 0.6;
        }
    }
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: ${(props) => props.theme.font.nav};

    a {
        padding: 1rem 1.5rem;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavListMobile = styled.ul`
    display: none;
    align-items: center;
    gap: 1.5rem;
    font-size: ${(props) => props.theme.font.nav};

    a,
    li {
        padding: 1rem 1.5rem;
    }
    @media screen and (max-width: 768px) {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 30%;
        height: 100vh;
        padding-top: 10rem;
        z-index: 5;
        width: 100%;
        overflow-y: auto;
        background: ${(props) => props.theme.color.primary};
        li {
            margin-left: 1.5rem;
        }
    }
`;

import styled from "styled-components";

export const MainContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
        "img   img   news"
        "text  text  news"
        "news2 news2 news2";
    gap: 3rem;
    margin: 0 14rem 7rem;

    @media screen and (max-width: 1440px) {
        margin: 0 9.73% 7rem;
    }
    @media screen and (max-width: 1340px) {
        margin: 0 5.73% 7rem;
    }
    @media screen and (max-width: 1220px) {
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        grid-template-areas:
            "img   img "
            "text  text"
            "news  news2";
        gap: 7rem 3rem;
    }
    @media screen and (max-width: 680px) {
        margin: 0 5.73% 2rem;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, auto);
        grid-template-areas:
            "img "
            "text"
            "news"
            "news2";
        gap: 4rem;
    }
`;

export const MainPrincipalImg = styled.picture`
    grid-area: img;
    img {
        height: 100%;
    }
`;

export const SectionNew = styled.section`
    padding: 3rem 2.5rem 0;
    grid-area: news;
    background-color: ${(props) => props.theme.color.secondary};

    h2 {
        font-size: ${(props) => props.theme.font.h2};
        color: ${(props) => props.theme.color.laranja};
        font-weight: 700;
        margin-bottom: 3.5rem;
    }
    h3 {
        font-size: ${(props) => props.theme.font.h3};
        font-weight: 700;
        margin-bottom: 1.2rem;
        color: ${(props) => props.theme.color.primary};
        @media (hover: hover) {
            &:hover {
                transition: all 0.3s;
                color: ${(props) => props.theme.color.laranja};
            }
        }
        @media (hover: none) {
            button:hover {
                transition: all 0.3s;
                color: ${(props) => props.theme.color.primary};
            }
        }
    }
    p {
        font-size: ${(props) => props.theme.font.p};
        margin-bottom: 3.2rem;
        line-height: 1.5;
        color: ${(props) => props.theme.color.cinza1};
    }
    .linha {
        display: block;
        width: 100%;
        height: 0.1rem;
        margin-bottom: 3.2rem;
        background: ${(props) => props.theme.color.cinza1};
    }
    @media screen and (max-width: 680px) {
        margin-top: 2rem;
    }
`;

export const SectionText = styled.section`
    grid-area: text;

    .SectionTextBox {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        height: 100%;
    }
    .TextBox {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 3rem;
    }
    h1 {
        font-size: ${(props) => props.theme.font.h1};
        color: ${(props) => props.theme.color.secondary};
        font-weight: 800;
    }
    p {
        font-size: ${(props) => props.theme.font.p};
        line-height: 1.5;
    }
    button {
        cursor: pointer;
        align-self: start;
        border: none;
        padding: 1.5rem 3.5rem;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 0.3rem;
        font-size: ${(props) => props.theme.font.p};
        color: ${(props) => props.theme.color.primary};
        background: ${(props) => props.theme.color.vermelho};
        @media (hover: hover) {
            &:hover {
                transition: all 0.3s;
                background: ${(props) => props.theme.color.secondary};
            }
        }
        @media (hover: none) {
            &:hover {
                transition: all 0.3s;
                background: ${(props) => props.theme.color.vermelho};
            }
        }
    }

    @media screen and (max-width: 680px) {
        .SectionTextBox {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }
`;

export const SectionNews = styled.section`
    grid-area: news2;
    margin-top: 4rem;

    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
        height: 100%;
        li {
            display: flex;
            gap: 2rem;
        }
        img {
            width: 10rem;
            height: auto;
        }
        .num {
            font-size: 2.8rem;
            font-weight: 800;
            margin-bottom: 1rem;
            color: ${(props) => props.theme.color.cinza1};
        }
        h4 {
            font-size: ${(props) => props.theme.font.h4};
            font-weight: 700;
            margin-bottom: 1rem;
            color: ${(props) => props.theme.color.secondary};
            @media (hover: hover) {
                &:hover {
                    transition: all 0.3s;
                    color: ${(props) => props.theme.color.vermelho};
                }
            }
            @media (hover: none) {
                button:hover {
                    transition: all 0.3s;
                    color: ${(props) => props.theme.color.secondary};
                }
            }
        }
        p {
            font-size: ${(props) => props.theme.font.p};
            line-height: 1.5;
        }
    }

    @media screen and (max-width: 1220px) {
        margin: 0;

        ul {
            grid-template-columns: 1fr;
            align-content: space-between;
        }
    }
    @media screen and (max-width: 680px) {
        margin: 2rem 0;
    }
`;

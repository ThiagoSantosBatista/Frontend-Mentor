import styled from "styled-components";
import Bg from "../../assets/imgs/bg-pattern-intro-desktop.svg";

export const Main = styled.main`
  height: 60rem;
  background-image: url(${Bg}),
    linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%));
  background-position: 25% 53%;
  background-repeat: no-repeat;
  border-bottom-left-radius: 10rem;
`;

export const MainBox = styled.div`
  position: relative;
  height: 100%;
  max-width: 144rem;
  margin: 0 auto;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24rem;
  text-align: center;

  h1 {
    margin-bottom: 2rem;
    font-size: 6.4rem;
    font-weight: 600;
    font-family: "Overpass", sans-serif;
    letter-spacing: -0.25rem;
  }
  p {
    margin-bottom: 6rem;
    font-size: 2rem;
    font-family: "Overpass", sans-serif;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
`

export const ButtonWhite = styled.button`
  width: 14rem;
  padding: 1.5rem 0;
  border-radius: 5rem;
  border: 0.1rem solid hsl(0, 0%, 100%);
  color: hsl(356, 100%, 66%);
  font-weight: 700;
  cursor: pointer;
`;


export const ButtonRed = styled.button`
  width: 14rem;
  padding: 1.5rem 0;
  border-radius: 5rem;
  border: 0.1rem solid hsl(0, 0%, 100%);
  background: none;
  color: hsl(0, 0%, 100%);
  font-weight: 700;
  cursor: pointer;
`;

import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 6rem;
  left: 50%;
  width: 100%;
  max-width: 144rem;
  padding: 0 16.7rem;
  z-index: 10;
  transform: translateX(-50%);
`;

export const Box = styled.header`
  display: flex;
  align-items: center;
  gap: 6.4rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 3rem;

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
    cursor: pointer;
  }
  a {
    font-weight: 500;
  }
  svg {
    margin-top: 0.2rem;
  }
`;

export const Button = styled.button`
  padding: 1.5rem 3rem;
  color: hsl(356, 100%, 66%);
  background-color: white;
  border-radius: 5rem;
`;

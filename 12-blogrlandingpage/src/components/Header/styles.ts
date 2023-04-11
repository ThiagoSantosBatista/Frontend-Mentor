import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 8rem;
  margin: 0 auto;
  padding: 0 13.5rem;
  height: 7rem;
  width: 100%;
`;

export const Box = styled.header`
  display: flex;
  align-items: center;
  gap: 6rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 2.4rem;
  font-size: 1.8rem;

  a{
    color: white;
  }
`;

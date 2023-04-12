import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 8rem;
  margin: 0 auto;
  padding: 0 16.7rem;
  height: 7rem;
  width: 100%;
`;

export const Box = styled.header`
  display: flex;
  align-items: center;
  gap: 6.4rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 3rem;
  
  li{
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
    cursor: pointer;
  }
  a{
    font-weight: 500;
  }
`;

export const Button = styled.button`
  padding: 1.5rem 3rem;
  color: hsl(356, 100%, 66%);
  background-color: white;
  border-radius: 5rem;
`

import styled from "styled-components"

export const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 7rem 14rem 5rem;

   @media screen and (max-width: 1440px){
   margin: 7rem 9.73% 5rem;

   }
`

export const NavList = styled.ul`
   display: flex;
   align-items: center;
   gap: 1.5rem;
   font-size: ${props => props.theme.font.nav};

   a{
      padding: 1.5rem;
   }
`
import styled from "styled-components"

export const MainContainer = styled.main`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(3, auto);
   grid-template-areas:
   "img   img   news"
   "text  text  news"
   "news2 news2 news2"
   ;
   gap: 2rem;
   margin: 0 14rem;

   @media screen and (max-width: 1440px){
   margin: 0 9.73%;

   }
`

export const MainPrincipalImg = styled.img`
   grid-area: img;
`

export const SectionNew = styled.section`
   padding: 3rem 2.5rem 0;
   grid-area: news;
   background-color: ${props => props.theme.color.secondary};

   h2{
      font-size: ${props => props.theme.font.h2};
      color: ${props => props.theme.color.laranja};
      font-weight: 700;
      margin-bottom: 3rem;
   }
   h3{
      font-size: ${props => props.theme.font.h3};
      color: ${props => props.theme.color.primary};
      font-weight: 700;
      margin-bottom: 1rem;
   }
   p{
      font-size: ${props => props.theme.font.p};
      margin-bottom: 3rem;
   }
   .linha{
      display: block;
      width: 100%;
      height: .1rem;
      margin-bottom: 3rem;
      background: ${props => props.theme.color.cinza1};
   }

`
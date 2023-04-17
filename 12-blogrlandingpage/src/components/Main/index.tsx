import React from "react";
import * as S from "./styles";

const Main = () => {
  return (
    <S.Main>
      <S.MainBox>
        <S.ContentBox>
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <S.ButtonBox>
            <S.ButtonWhite>Start for Free</S.ButtonWhite>
            <S.ButtonRed>Learn More</S.ButtonRed>
          </S.ButtonBox>
        </S.ContentBox>
      </S.MainBox>
    </S.Main>
  );
};

export default Main;

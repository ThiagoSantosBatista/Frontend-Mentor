import React from "react";
import ImagemPrincipal from "../../assets/image-web-3-desktop.jpg";
import { MainContainer, MainPrincipalImg, SectionNew } from "./style";

const Main = () => {
    return (
        <MainContainer>
            <MainPrincipalImg src={ImagemPrincipal} />
            <SectionNew>
                <h2>New</h2>
                <ul>
                    <li>
                        <h3>Hydrogen VS Electric Cars</h3>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                        <span className="linha"></span>
                    </li>
                    <li>
                        <h3>The Downsides of AI Artistry</h3>
                        <p>What are the possible adverse effects of on-demand AI image generation?</p>
                        <span className="linha"></span>
                    </li>
                    <li>
                        <h3>Is VC Funding Drying Up?</h3>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </li>
                </ul>
            </SectionNew>
            <section></section>
            <section></section>
        </MainContainer>
    );
};

export default Main;

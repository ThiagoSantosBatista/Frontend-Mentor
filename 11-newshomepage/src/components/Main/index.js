import React from "react";
import ImagemPrincipal from "../../assets/image-web-3-desktop.jpg";
import ImagemPrincipalMobile from "../../assets/image-web-3-mobile.jpg";
import Imagem1 from "../../assets/image-retro-pcs.jpg";
import Imagem2 from "../../assets/image-top-laptops.jpg";
import Imagem3 from "../../assets/image-gaming-growth.jpg";
import {
    MainContainer,
    MainPrincipalImg,
    SectionNew,
    SectionText,
    SectionNews,
} from "./style";

const Main = () => {
    return (
        <MainContainer>
            <MainPrincipalImg>
               <source media="(max-width: 600px)" srcSet={ImagemPrincipalMobile}></source>
                <img src={ImagemPrincipal} alt="" />
            </MainPrincipalImg>
            <SectionNew>
                <header>
                    <h2>New</h2>
                </header>
                <ul>
                    <li>
                        <h3>Hydrogen VS Electric Cars</h3>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                        <span className="linha"></span>
                    </li>
                    <li>
                        <h3>The Downsides of AI Artistry</h3>
                        <p>
                            What are the possible adverse effects of on-demand
                            AI image generation?
                        </p>
                        <span className="linha"></span>
                    </li>
                    <li>
                        <h3>Is VC Funding Drying Up?</h3>
                        <p>
                            Private funding by VC firms is down 50% YOY. We take
                            a look at what that means.
                        </p>
                    </li>
                </ul>
            </SectionNew>
            <SectionText>
                <div className="SectionNewsBox">
                    <header>
                        <h1>The Bright Future of Web 3.0?</h1>
                    </header>
                    <div className="TextBox">
                        <p>
                            We dive into the next evolution of the web that
                            claims to put the power of the platforms back into
                            the hands of the people. But is it really fulfilling
                            its promise?
                        </p>
                        <button>read more</button>
                    </div>
                </div>
            </SectionText>
            <SectionNews>
                <ul>
                    <li>
                        <img src={Imagem1} alt="" />
                        <div>
                            <p className="num">01</p>
                            <h4>Reviving Retro PCs</h4>
                            <p>
                                What happens when old PCs are given modern
                                upgrades?
                            </p>
                        </div>
                    </li>
                    <li>
                        <img src={Imagem2} alt="" />
                        <div>
                            <p className="num">02</p>
                            <h4>Top 10 Laptops of 2022</h4>
                            <p>Our best picks for various needs and budgets.</p>
                        </div>
                    </li>
                    <li>
                        <img src={Imagem3} alt="" />
                        <div>
                            <p className="num">03</p>
                            <h4>The Growth of Gaming</h4>
                            <p>
                                How the pandemic has sparked fresh
                                opportunities.
                            </p>
                        </div>
                    </li>
                </ul>
            </SectionNews>
        </MainContainer>
    );
};

export default Main;

import React, { useState } from "react";
import { styled } from "styled-components";
import MyName from "../MyName";
import MyPicture from '../pictures/Slavynia.png';
import LinkedIn1 from '../pictures/linkedin1.png';
import LinkedIn2 from '../pictures/linkedin2.png';
import AboutMeButton from "./layouts/AboutMeButton";
import ProjectsButton from "./layouts/ProjectsButton";

function IntroDesktop() {
    const [isHovered, setIsHovered] = useState(false);
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const LinkedinClick = (e) => {
        e.preventDefault();
        const url = 'https://www.linkedin.com/in/valexeenko-info/';
        window.open(url, '_blank');
      };

    return(
        <WrapBlock>
            <TextBlock>
                <Header>
                    <FirstParagraph>Hello, i'm</FirstParagraph>
                    <SecondParagraph><MyName/></SecondParagraph>
                    <Description>Software Engineer in Test. Champion of quality, finding issues before customers do!</Description>
                    <ButtonContainer>
                    <AboutMeButton scrollNumber={670} />
                    <ProjectsButton/>
                    <Logo
                    src={isHovered ? LinkedIn2 : LinkedIn1}
                    alt="Linkedin image"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    href="#" onClick={LinkedinClick}
                    />
                    </ButtonContainer>
                </Header>
                <MyCircleImage src={MyPicture} alt="MyPicture" />
            </TextBlock>
        </WrapBlock>
    )
}

const WrapBlock = styled.div`
    display: flex;
    align-items: center;
    height: calc(100vh - 5rem);
`;

const TextBlock = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Header = styled.div`
    display: inline-grid;
    max-width: 24.375rem;
`;

const FirstParagraph = styled.span`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
    padding-bottom: 0.625rem;
    margin: 0;
;`

const SecondParagraph = styled.span`

;`

const Description = styled.span`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal; 
    margin: 1.25rem 0rem 1.875rem 0rem;
    
;`

const MyCircleImage = styled.img`
    height: 23.125rem;
    margin-left: 9.375rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 24.1875rem;
    gap: 0.9375rem;
`;

const Logo = styled.img`
    height: 3rem;
    width: 3rem;
    cursor: pointer;
`;

export default IntroDesktop;
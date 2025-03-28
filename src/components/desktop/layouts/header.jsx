import React from "react";
import { styled } from "styled-components";
import { colors } from "../../colors";

function Header({scrollToAboutMe, scrollToProjects}) {

    const LinkedinClick = (e) => {
        e.preventDefault();
        const url = 'https://www.linkedin.com/in/valexeenko-info/';
        window.open(url, '_blank');
      };

    return(
        <div>
            <HeaderLayout>
                <div>
                <Logo>Vlad Alexeenko</Logo>
                </div>
                <RightPart>
                <Paragraph onClick={() => window.scrollTo({top: "0", behavior: 'smooth'})}>Home</Paragraph>
                <Paragraph onClick={scrollToAboutMe}>About me</Paragraph>
                <Paragraph onClick={scrollToProjects}>Projects</Paragraph>
                <Paragraph href="#" onClick={LinkedinClick}>Contact me</Paragraph>
                </RightPart>
            </HeaderLayout>
        </div>
    )
}

const HeaderLayout = styled.div`
    display: inline-flex;
    padding: 1.1875rem 0rem;
    width: 100%;
    height: 5.0rem;
    background: ${colors.headerColor}; 
    align-items: center;
    justify-content: space-between;
`;

const RightPart = styled.div`
    display: inline-flex;
    align-items: flex-start;
    gap: 2.5rem;
    padding-right: 10rem;
`;

const Logo = styled.p`
    color: ${colors.primaryColor};
    font-family: 'Poppins', sans-serif;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal; 
    margin: 0;
    padding-left: 10rem;
`;

const Paragraph = styled.p`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal; 
    margin: 0;
    cursor: pointer;
    border-bottom: 1px solid white;
    &: hover{
        border-bottom: 1px solid ${colors.primaryColor};
    }
`;

export default Header;
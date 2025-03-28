import React from "react";
import styled from "styled-components";
import userImage from '../../pictures/userImage.png';
import { colors } from "../../colors";

const AboutMeButton = ({scrollNumber}) => {
    return(
        <ButtonComponent onClick={() => window.scrollTo({top: scrollNumber, behavior: 'smooth'})}>
            About me
            <UserImage src={userImage} alt="User" />
        </ButtonComponent>
    )
}

const ButtonComponent = styled.button`
    display: inline-flex;
    padding: 0.75rem 0.9375rem;
    gap: 0.375rem;
    border-radius: 0.5rem;
    background: ${colors.primaryColor};

    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    width: 9.375rem;
    height: 3rem;
    cursor: pointer;
    border: none;
    align-items: center;
    justify-content: center;
    &: hover{
        border: 2px solid ${colors.primaryColor}; 
        background: ${colors.primaryBackground};
    }
`;

const UserImage = styled.img`
    height: 1.5625rem;
`;

export default AboutMeButton;
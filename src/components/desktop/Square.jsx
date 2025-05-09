import React from "react";
import styled from "styled-components";
import { colors } from "../colors";

function Square({ text, imageSrc, altText }) {
    
    return(
        <SquareBlock>
            <TextPosition>
                <Text>{text}</Text>
                <div>
                <Picture src={imageSrc} alt={altText} />
                </div>
            </TextPosition>
        </SquareBlock>
    )
}

const SquareBlock = styled.div`
    width: 226px;
    height: 224px;
    flex-shrink: 0; 
    background: ${colors.primaryColor};
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.20);
`;

const TextPosition = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    margin: 0px 0px 0px 15px;
`;

const Text = styled.span`
    color: #FFF;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
    margin: 14px 0px 14px 0px;
`;

const Picture = styled.img`
    height: 50px;
`;

export default Square;
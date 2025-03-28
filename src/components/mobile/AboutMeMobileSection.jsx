import React, { useState, forwardRef } from "react";
import { styled } from "styled-components";
import { colors } from "../../../src/components/colors";
import leftPicture from '../pictures/leftPicture.png';
import rightPicture from '../pictures/rightPicture.png';

const AboutMeMobileSection = forwardRef((props, ref) => {

     const [year, setYear] = useState(6);
    
    function increase() {
        setYear(year+1);
    }

    return(

        <div ref={ref} style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '3.4375rem', padding: '0rem 3.125rem 0rem 3.125rem'}}>
        <section className="">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" style={{ color: "#7562E0" }}>About me:</h2>
                <p className="mb-4 text-gray-500 dark:text-white" style={{ fontWeight: 300 }}>Hi, my name is Vlad Alexeenko, I am a software engineer in test, and frontend developer with experience in testing web and mobile applications. </p>
                <Flex>
                <Number onClick={increase}>{year}+</Number>
                <AboutText>Years of experience. Specialised in building and testing apps, while ensuring a seamless web experience for end users.</AboutText>
                </Flex>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src={leftPicture} alt="left picture"/>
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src={rightPicture} alt="right picture"/>
            </div>
        </div>
    </section>
    </div>
    )
});

const Flex = styled.div`
    display: flex;
    gap: 1.0625rem;
`;

const Number = styled.span`
    color: ${colors.primaryColor};
    font-family: Poppins;
    font-size: 6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
`;

const AboutText = styled.span`
    color: white;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 1.25rem 0 0 0.3125rem;
`;


export default AboutMeMobileSection;
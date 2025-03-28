import React, { useState } from "react";
import { styled } from "styled-components";
import MyPicture from '../pictures/Slavynia.png';
import MyName from "../MyName";
import LinkedIn1 from '../pictures/linkedin1.png';
import LinkedIn2 from '../pictures/linkedin2.png';
import MyNameMobile from "../MyNameMobile";
function HeadingMobile({scrollToAboutMe}) {  

    const [isHovered, setIsHovered] = useState(false);

    const ResumeClick = (e) => {
        e.preventDefault();
        const url = 'https://drive.google.com/file/d/1nN0XOz-vprEBt5vjfc96x1twIWWz7nJX/view?usp=sharing';
        window.open(url, '_blank');
    }
    
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
        <section className="">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7" style={{marginTop: '12vh'}}>
        <div className="flex justify-center mt-6 lg:mt-0 lg:col-span-5" style={{marginBottom: '3rem'}}>
            <img src={MyPicture} alt="mockup"/>
        </div> 
            <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none sm:text-5xl md:text-5xl xl:text-4xl dark:text-white">Hello, i'm</h2>
            {/* <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight leading-none dark:text-white">Hello, I'm</h2> */}
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"><MyNameMobile/></h1>
            
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white" style={{ fontWeight: 300 }}>Software Engineer in Test. Champion of quality, finding issues before customers do!</p>
            <div className="flex space-x-4" style={{display: 'flex', justifyContent: 'center'}}>
            <button
                onClick={scrollToAboutMe}
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-[#7e22ce] hover:bg-[#6b21a8] focus:ring-4 focus:ring-[#9333ea] rounded-lg dark:focus:ring-[#3b0764]"
                    style={{cursor: 'pointer'}}
            >
                    About me
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
            </button>
            <a href="#" onClick={ResumeClick} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Resume
            </a> 
            <Logo
                    src={isHovered ? LinkedIn2 : LinkedIn1}
                    alt="Linkedin image"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    href="#" onClick={LinkedinClick}
            />
            </div>
        </div>               
    </div>
</section>
    )
}

const Logo = styled.img`
    height: 48px;
    width: 48px;
    cursor: pointer;
`;


export default HeadingMobile;
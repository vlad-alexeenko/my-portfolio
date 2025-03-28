import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './components/desktop/layouts/header';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import OfferServices from './components/desktop/layouts/OfferServices';
import AboutMe from './components/desktop/layouts/AboutMeSection';
import SharpSection from './components/desktop/layouts/SharpSection';
import CodeNoiseSection from './components/desktop/layouts/CodeNoiseSection';
import Heading from './components/desktop/layouts/Heading';
import Referenses from './components/desktop/layouts/References';
import Footer from './components/desktop/layouts/Footer';
import HeadingMobile from './components/mobile/HeadingMobile';
import AboutMeMobileSection from './components/mobile/AboutMeMobileSection';
import HeadingXl from './components/desktop/HeadingXl';

function App() {
const [isMobile, setIsMobile] = useState(false);
const [isXl, setIsXl] = useState(false);
const aboutMeRef = useRef(null);
const projectsRef = useRef(null);

const scrollToAboutMe = () => {
  aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
}

const scrollToProjects = () => {
  projectsRef.current?.scrollIntoView({ behavior: "smooth" });
}

useEffect(() => {
	const handleResize = () => {
	setIsMobile(window.innerWidth <= 630);
  setIsXl(window.innerHeight >= 900);
	 };
  
	 window.addEventListener('resize', handleResize);
	 handleResize(); // Initial check

	 return () => {
	window.removeEventListener('resize', handleResize);
	 };
}, []);

  return (
    <div>
      {!isMobile && !isXl && (
				<>
				<div>
        <Header scrollToAboutMe={scrollToAboutMe} scrollToProjects={scrollToProjects}/>
        <Heading scrollToAboutMe={scrollToAboutMe}/>
        <AboutMe ref={aboutMeRef}/>
        <OfferServices/>
        <SharpSection ref={projectsRef}/>
        <CodeNoiseSection/>
        <Referenses/>
        <Footer scrollToAboutMe={scrollToAboutMe} scrollToProjects={scrollToProjects}/>
			  </div>
			  </>
			)}

      {isXl && (
        <>
        <div>
        <Header scrollToAboutMe={scrollToAboutMe} scrollToProjects={scrollToProjects}/>
        <HeadingXl scrollToAboutMe={scrollToAboutMe}/>
        <AboutMe ref={aboutMeRef}/>
        <OfferServices/>
        <SharpSection ref={projectsRef}/>
        <CodeNoiseSection/>
        <Referenses/>
        <Footer scrollToAboutMe={scrollToAboutMe} scrollToProjects={scrollToProjects}/>
			  </div>
        </>
      )}

      {isMobile && (
				<>
        <HeadingMobile scrollToAboutMe={scrollToAboutMe}/>
        <AboutMeMobileSection ref={aboutMeRef}/>
        <OfferServices/>
        <SharpSection ref={projectsRef}/>
        <CodeNoiseSection/>
        <Referenses/>
        <Footer scrollToAboutMe={scrollToAboutMe} scrollToProjects={scrollToProjects}/>
			  </>
			)}


      
    </div>
  );
}

export default App;

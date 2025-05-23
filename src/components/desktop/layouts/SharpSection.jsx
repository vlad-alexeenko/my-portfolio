import React, { forwardRef } from "react";
import sharpPicture from '../../pictures/SharpPicture.png';

const SharpSection = forwardRef((props, ref) => {

    return(

        <div ref={ref} style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '3.4375rem', padding: '0rem 0.825rem 0rem 0.825rem'}}>
        
        <section className="">
        <h2 className="mb-0 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" style={{ color: "#7562E0" }}>Featured projects:</h2>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-8 lg:px-6">
        <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image"/>
        <img className="w-full hidden dark:block" src={sharpPicture} alt="Sharp Healthcare image"/>
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Sharp.com</h2>
            <li className="mb-6 font-light text-white md:text-lg dark:text-white" style={{ fontWeight: 300 }}>Performed functional, smoke, regression, and API testing using Cypress and TypeScript.</li>
            <li className="mb-6 font-light text-white md:text-lg dark:text-white" style={{ fontWeight: 300 }}>Automated DCT manual test cases, including critical test scenarios, to enhance test coverage and efficiency.</li>
            <li className="mb-6 font-light text-white md:text-lg dark:text-white" style={{ fontWeight: 300 }}>Implemented modern software design patterns to improve test organization, readability, and maintainability.</li>
            <a href="https://www.sharp.com/" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-[#7e22ce] hover:bg-[#6b21a8] focus:ring-4 focus:ring-[#9333ea] rounded-lg dark:focus:ring-[#3b0764]">
                View Live
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </a>
        </div>
        </div>
        </section>

    </div>
    )
});


export default SharpSection;
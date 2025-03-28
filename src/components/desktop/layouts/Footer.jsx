import React from "react";

function Footer({scrollToAboutMe, scrollToProjects}) {

    const Year = new Date().getFullYear();

    const LinkedinClick = (e) => {
        e.preventDefault();
        const url = 'https://www.linkedin.com/in/valexeenko-info/';
        window.open(url, '_blank');
      };

    const TelegramClick = (e) => {
        e.preventDefault();
        const url = 'https://t.me/valexeenko/';
        window.open(url, '_blank');
    };

    return(

<footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {Year} Designed by myself in San Diego, CA.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a onClick={scrollToAboutMe} className="hover:underline me-4 md:me-6" style={{cursor: 'pointer'}}>About</a>
        </li>
        <li>
            <a onClick={scrollToProjects} className="hover:underline me-4 md:me-6" style={{cursor: 'pointer'}}>Projects</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6" onClick={TelegramClick}>Telegram</a>
        </li>
        <li>
            <a href="#" className="hover:underline" onClick={LinkedinClick}>LinkedIn</a>
        </li>
    </ul>
    </div>
</footer>

    )
}



export default Footer;
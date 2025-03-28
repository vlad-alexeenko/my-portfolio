import React from "react";
import leftPicture from '../../pictures/ChrisPicture1.png';
import rightPicture from '../../pictures/JamesBlack.png';
import leftPictureDown from '../../pictures/Ashley1.png';
import rightPictureDown from '../../pictures/Peachy.png';

function Referenses() {

    const LinkedinClick = (e) => {
        e.preventDefault();
        const url = 'https://www.linkedin.com/in/valexeenko-info/';
        window.open(url, '_blank');
      };

    return(

        <div>
            <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" style={{ color: "#7562E0" }}>References:</h2>
          <p className="font-light text-white lg:mb-16 sm:text-xl dark:text-white">You can find those recommendations on my LinkedIn profile.</p>
      </div> 
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img className="ex: w-32 rounded-full sm:rounded-lg sm:w-full rounded-l-lg" src={leftPicture} alt="Chris Lee Avatar" href="#" onClick={LinkedinClick}/>
              </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Chris Lee</a>
                  </h3>
                  <span className="text-white dark:text-white"> Sr. QA Engineer</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">I have had the pleasure of working with Vlad at Opportunity@Work, where he demonstrated an exceptional ability to...</p>
              </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img className="ex: w-32 rounded-full sm:rounded-lg sm:w-full rounded-l-lg" src={rightPicture} alt="James Black Avatar" href="#" onClick={LinkedinClick}/>
              </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">James Black</a>
                  </h3>
                  <span className="text-white dark:text-white">Sr. Product Manager</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Vlad is an impressive, dedicated, and invaluable part of the team at CodeNoise. He joined as QA and quickly trans...</p>
              </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img className="ex: w-32 rounded-full sm:rounded-lg sm:w-full rounded-l-lg" src={leftPictureDown} alt="Ashley Avatar" href="#" onClick={LinkedinClick}/>
              </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Ashley Van De Poel</a>
                  </h3>
                  <span className="text-white dark:text-white"> Sr. Software Engineer</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Vlad is a true unicorn. He's a passionate engineer with a contagious enthusiasm to learn and excel. He is thorough...</p>
              </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img className="ex: w-32 rounded-full sm:rounded-lg sm:w-full rounded-l-lg" src={rightPictureDown} alt="Chris Lee Avatar" href="#" onClick={LinkedinClick}/>
              </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Peachy</a>
                  </h3>
                  <span className="text-white dark:text-white"> Toy Poodle</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Not only is Vlad a perfect team player, but he is also the best dog dad! He is extremely good at playing with me...</p>
              </div>
          </div> 
      </div>  
  </div>
</section>
        </div>
    )
}


export default Referenses;
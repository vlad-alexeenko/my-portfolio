import React from "react";
import userImage from '../../pictures/ruler&pen.png';
import codeImage from '../../pictures/code.png';
import robotImage from '../../pictures/android.png';
import versionControlImage from '../../pictures/git-repo.png';
import javaScriptImage from '../../pictures/javascript.png';
import remoteImage from '../../pictures/remote.png';

function OfferServices() {

    return(
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '3.4375rem', padding: '0rem 0.825rem 0rem 0.825rem'}}>
            <div>
            <section className="">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" style={{ color: "#7562E0" }}>The services i offer:</h2>
  <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img   src={userImage}   alt="User Icon"   className="w-8 h-8 lg:w-12 lg:h-12 " />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">UI & UX TESTING</h3>
              <li className="text-gray-500 dark:text-white" style={{ fontWeight: 300 }}>Functional, Integration, Perfomance testing for every new ticket. Updating test documentation and test plans.</li>
              <li className="text-gray-500 dark:text-white" style={{ fontWeight: 300 }}>Automation regression (Cypress.io & JS, Webdriver.io & JS, Appium & JS).</li>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img   src={codeImage}   alt="WebDev Icon"   className="w-8 h-8 lg:w-12 lg:h-12 " />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">WEB DEVELOPMENT</h3>
              <li className="text-gray-500 dark:text-white" style={{ fontWeight: 300 }}>Frontend development using React (JS/TS) and Rails (JS/Ruby).</li>
              <li className="text-gray-500 dark:text-white" style={{ fontWeight: 300 }}>Understanding the development methodologies and testing strategies.</li>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img   src={remoteImage}   alt="API Icon"   className="w-8 h-8 lg:w-12 lg:h-12 " />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">API TESTING</h3>
              <li className="text-gray-500 dark:text-white" style={{ fontWeight: 300 }}>Creation and maintenance of Postman collections (with pre-request scripts and tests).</li>
              <li className="text-gray-500 dark:text-white" style={{ fontWeight: 300 }}>Working with API documentation and creating automation API tests (Postman/Cypress.io & JS).</li>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img   src={javaScriptImage}   alt="JS Icon"   className="w-8 h-8 lg:w-12 lg:h-12 " />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">UNIT TESTING</h3>
              <li className="text-gray-500 dark:text-white" style={{ fontWeight: 300 }}>Familiarity with the test-driven development process.</li>
              <li className="text-gray-500 dark:text-white" style={{ fontWeight: 300 }}>Tools: RSpec (Ruby), Jest/React Testing Library (JS).</li>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img   src={robotImage}   alt="Mobile Icon"   className="w-8 h-8 lg:w-12 lg:h-12 " />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">MOBILE TESTING & DEVELOPMENT</h3>
              <li className="text-gray-500 dark:text-white" style={{ fontWeight: 300 }}>Frontend development using React Native (JS/TS).</li>
              <li className="text-gray-500 dark:text-white" style={{ fontWeight: 300 }}>Development of an automated test suites (Appium & JavaScript with Node. js).</li>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img   src={versionControlImage}   alt="Version Control Icon"   className="w-8 h-8 lg:w-12 lg:h-12 " />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">VERSION CONTROL</h3>
              <li className="text-gray-500 dark:text-white" style={{ fontWeight: 300 }}>Familiarity with the version control systems.</li>
              <li className="text-gray-500 dark:text-white" style={{ fontWeight: 300 }}>Tools: github & bitbucket.</li>
          </div>
      </div>
  </div>
</section>
        </div>
        </div>
    )
}


export default OfferServices;
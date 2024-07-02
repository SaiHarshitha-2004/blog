import React from "react";
import Style from "../components/style.jsx";
import Animations from "../pages/Animations.jsx";
import NumberTicker from "../Ui/number-ticker.tsx";

const About = () => {
  return (
    <div className="relative">
      <div
        id="subTitle"
        className={`${Style.subTitle} mt-20 text-center`}
      >
        About Aura
      </div>
      <div className="flex lg:flex-row justify-center items-center md:flex-row flex-col">
        {/* Animations */}
        <div className="flex justify-center w-full lg:w-1/2 z-0">
          <Animations />
        </div>

        {/* About us content */}
        <div className="flex flex-col p-5 lg:text-start space-y-16">
         
         {/* first row */}
        <div className="flex flex-col sm:space-y-3 space-y-4">
         <div id="captionTitle" className='text-xl bg-gradient-to-r from-[#2600fc] to-[#ff00ea] bg-clip-text text-transparent'>LEARN AND CREATE</div>
          <div id="subTitle" className={`text-white lg:text-3xl md:text-l mb-2`}>
            Enhance your knowledge
          </div>
          <div id="subTitle" className={`text-white lg:text-3xl md:text-l mb-2`}>with Aura</div>
          <div id="miniTitle" className={`text-gray-500`}>
            Multiple Articles , One Page. Stack up your thoughts from across our community
          </div>
        </div>

        {/* second row */}
        <div className="flex flex-row space-x-14">

          
          <div className="flex flex-col">
            <div id="subTitle" className={`text-white lg:text-3xl md:text-l`}>
            <NumberTicker value={5000} /> {"+"}

            </div>
            <div id="miniTitle" className={`text-gray-500`}>
              Post Every 5 min
            </div>
          </div>

          <div className="flex flex-col">
            <div id="subTitle" className={`text-white lg:text-3xl md:text-l`}>
              <NumberTicker value={2500} /> {"+"}
            </div>
            <div id="miniTitle" className={`text-gray-500`}>
              Collections Every 2 min
            </div>
          </div>

        </div>

      </div>

        
      </div>
    </div>
  );
};

export default About;

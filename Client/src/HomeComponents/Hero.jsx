import React from "react";
import TypeWriter from "./TypeWriter.jsx";
import Style from "../components/style.jsx";
import title1 from "../homeimages/title1.jpg";
import aura from "../homeimages/aura.png";

const Hero = () => {
  return (
    <div className="w-full mt-16">
      <div
        aria-hidden="true"
        className={`text-white ${Style.blur_color}`}
      ></div>

      {/* Hero section text and images */}
        <div className="relative flex justify-center max-w-full items-center flex-col lg:flex-row">

          <div
            className="relative space-y-6 flex flex-col lg:w-1/2 w-full justify-center items-center"
            style={{ height: "50vh" }}
          >
              <div id = "title" className={`${Style.title}`}>Explore in learning,</div>
              <TypeWriter />
              <div id="captionTitle" className={`${Style.captionTitle} text-white text-center float-left flex flex-wrap`}>
                  Welcome to a world where curiosity knows no limits!
              </div>
              <Link to="/articlesList">
                <button className={`btn border-0 ${Style.button} cursor-pointer text-center`}>
                    Show more
                </button>
                </Link>
          </div>


          <div className="relative lg:w-1/2 flex justify-center items-center w-full">
            <div className="flex flex-row justify-center items-center gap-7">
              <img
                className="mask mask-hexagon-3 reverse w-2/3 h-1/2"
                  src={aura} />
              {/* <div className="w-32 h-32 lg:w-64 lg:h-64 rounded-2xl md:w-64  md:h-64 mb-10 bg-yellow-500 z-10"></div>
              <div className="w-32 h-32 lg:w-64 lg:h-64 rounded-2xl md:w-64  md:h-64 mt-16 bg-red-500 z-10"></div> */}
            </div>
          </div>
         
        </div>
      </div>
  );
};

export default Hero;

import React, { useEffect, useState, useMemo } from "react";
import Animations from "./Animations";
import Style from "../components/style";
import background from '../homeimages/background.jpg';
import Category from "./Category";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const App = () => {
  const iconsStyle = `flex justify-center p-3 m-2 h-16 w-16 items-center text-white transition-all duration-300 hover:border hover:border-white hover:rounded-2xl`
  const endings = useMemo(
    () => ["Discover Wisdom", "Ignite Curiosity", "Embrace Knowledge", "Navigate IT Trends"],
    []
  );
  const [index, setIndex] = useState(0);
  const [currIndex, setCurrIndex] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timer;
    if (typing) {
      timer = setTimeout(() => {
        const char = currIndex.length + 1;
        setCurrIndex(endings[index].slice(0, char));
        if (char === endings[index].length) {
          setTyping(false);
          setTimeout(() => {
            setTyping(true);
            timer = null;
            setCurrIndex('');
            setIndex((index + 1) % endings.length);
          }, 2000);
        }
      }, 100);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [typing, currIndex, index, endings]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex justify-center h-full flex-col w-3/4 items-center">
        <div className={`${Style.title} h-32 relative `}>
          Explore in learning,
          <br />
          {currIndex}
        </div>
        <div className="pb-2">
          <p className="text-white text-center float-left flex flex-wrap">Welcome to a world where curiosity knows no limits!</p>
        </div>
        <div>
          <button className="w-32 text-gray-100 font-semibold py-2 px-4 rounded-full shadow-md border border-gray-200 bg-transparent glass-effect">explore</button>
        </div>
      </div>
      <div className="flex flex-col p-2 m-2 items-center">
         <a href="https://github.com/SaiHarshitha-2004"className={iconsStyle}><FaGithub /></a>
         <a href=""className={iconsStyle}><BsLinkedin /></a>
         <a href=""className={iconsStyle}><FaFacebookF /></a>       
         <a href=""className={iconsStyle}><FaTwitter /></a>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center"  style={{height:"50vh"}}>
        <div className="w-full h-full bg-title-image bg-cover bg-center">
          <App />
        </div>
      </div>
      <div className="flex flex-row w-full items-center mt-2 justify-between" style={{height:"50vh"}}>
        <div className="w-2/3 text-center leading-7 m-2">
           <p className="text-blue-600 font-semibold">About us</p>
           <p className="flex flex-wrap p-2 tracking-wide">Welcome to Aura, where exploration meets innovation! Discover a curated blend of articles, 
            offering insights into tech, lifestyle, and more. 
            Elevate your experience with exclusive offerings—official website links dynamically connected to your searches. 
            Stay ahead with real-time updates.</p>
           <p></p>
        </div>
        <div className="w-1/2 z-0"><Animations style={{width:"30%" , height:"20%"}} /></div>
      </div>
      <Category />
    </div>
  );
};

export default Home;

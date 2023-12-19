import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TfiPencilAlt } from 'react-icons/tfi';
import { GiBookCover } from 'react-icons/gi';
import { Tooltip } from '@chakra-ui/react'
import { CgProfile } from "react-icons/cg";
import Aura from '../Animations/Aura.json'
import Lottie from 'lottie-react';
import Profile from '../pages/profile';
import { AiOutlineClose } from "react-icons/ai";
import {InitialState} from '../context/context.jsx'


const Navbar = () => {
  const {profile , setProfile} = InitialState()

  const ToolTipComponent = ({label , children}) => {
   return (
        <Tooltip hasArrow label={label} bg='lightblue' arrowSize={17} placement='bottom' className='m-2 pl-3 pr-3 pb-3 pt-2 rounded-xl'>
        {children}
    </Tooltip>
   )
  }

  const linkStyle = `text-blue-500 md:text-xl lg:text-2xl lg:font-semibold hover:bg-white hover:text-blue-500 focus:bg-white focus:text-blue-500 mr-10 p-4`;

  return (
    <div>
      <div className='sticky top-0 border border-black flex justify-between bg-lavender p-2 z-15'>
        <div className='flex flex-row items-center'>
          <div style={{ width: "5%", height: "2%" }} className='flex items-center'>
            <Lottie animationData={Aura} />
          </div>
          <Link to="/" children="Home" className={`${linkStyle} ml-10`} />
        </div>
        <div className='flex flex-row items-center'>
          <Link to="/articleslist" children="Articles" className={linkStyle} />
          <ToolTipComponent label='compose' children={<Link to="/writeBlog" className={linkStyle}>
              <span><TfiPencilAlt /></span>
            </Link>} />
          <ToolTipComponent label='profile' children = {<span className={linkStyle} onClick={() => setProfile(true)}><CgProfile /></span>} />
        </div>
      </div>
      {profile &&
        <div className='fixed top-0 w-screen h-screen flex justify-end items-start p-4' style={{ backgroundColor: 'rgba(169, 169, 169, 0.2)' }}> 
           <div className='fixed flex-col top-0 right-0 h-screen w-1/4 flex bg-gray-200 overflow-y-auto'>
             <p className='flex justify-between items-center cursor-pointer max-w-fit p-1 border border-black m-2 rounded-3xl'  onClick={() => setProfile(false)}>
               <span className='float-right'> <AiOutlineClose /></span>
            </p>
            <div className='p-4'>
              <Profile />
            </div>
        </div>
        </div>
      }
    </div>
  );
};

export default Navbar;

import React from 'react'
import Style from '../components/style'
import { FaGithub, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const JoinCommunity = () => {
  return (
    <div className='relative mb-16'>
      <div
        aria-hidden="true"
        className='absolute bottom-0 right-0 w-32 h-96 rounded-full bg-gradient-to-b from-violet-950 to-[#0F051D] blur-3xl scale-y-100 opacity-90'
      ></div>
      <div className='w-full flex flex-col items-center space-y-6 justify-center'>
      <div  id="subTitle" className={`${Style.subTitle} mt-24 text-center`}>We Make it Easy To Learn</div>
      <div  id="subTitle" className={`roboto text-center lg:text-3xl md:text-2xl sm:text-xl text-gray-400`}>Join Our Community</div>
      <button className={`btn border-0 ${Style.button} cursor-pointer text-center`}>
          Join
      </button>

      <div className="flex flex-row mb-16 space-x-6 pt-6 text-white">
              <a  href="https://github.com/SaiHarshitha-2004"><FaGithub  className='w-8 h-8'/></a>
              <a href="https://www.linkedin.com/feed/" >
                  <BsLinkedin  className='w-8 h-8' />
              </a>
              <a  href="https://www.facebook.com/" ><FaFacebookF  className='w-8 h-8'/></a>       
              <a  href="https://x.com/" ><FaTwitter  className='w-8 h-8' /></a>
            </div>
      </div>

    </div>
  )
}

export default JoinCommunity
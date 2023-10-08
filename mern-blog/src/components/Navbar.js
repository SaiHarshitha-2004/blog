import React from 'react'
import { Link } from 'react-router-dom'
import {GiBookCover} from 'react-icons/gi';

const Navbar = () => {
  const linkStyle = `text-white md:text-2xl lg:text-3xl lg:font-semibold hover:border hover:rounded-lg mr-10 p-5 hover:bg-white hover:text-blue-500`
  return (
    <div className='flex justify-between bg-blue-400 p-2 relative'>
      <div className='flex flex-row'>
      <GiBookCover className='text-5xl mt-2' />
      <Link to="/" children="Home" className={`${linkStyle} ml-10`}/>
      </div>
      <div className='flex'>
        <Link to="/articleslist" children="Articles" className={linkStyle}/>
        <Link to="/about" children="About" className={linkStyle}/>
      </div>
    </div>
  )
}

export default Navbar
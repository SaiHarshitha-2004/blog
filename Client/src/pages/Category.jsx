import React from 'react';
import cloud from '../homeimages/cloud.jpg';
import data from '../homeimages/data.jpeg';
import devops from '../homeimages/devops.jpg';
import proAndDev from '../homeimages/proAndDev.jpg';
import Style from "../components/style.jsx"
import { Link } from 'react-router-dom';

const items = [
  { src: cloud, 
     title: 'Cloud Computing',
     author:"#James"
  },  
  {
    src: data, 
    title: 'Data Management',
    author:"#James"
  },
  { src: devops,
     title:'DevOps',
     author:"#James"
  },
  { src: proAndDev, 
    title:'Programming and Development',
    author:"#James"
  }
];

const Insert = ({ src, content , position , Author}) => {

  return (
    <div className={`p-5 m-2 cursor-pointer ${position ? `md:mt-16 lg:mt-16` : ''} bg-[#44315d89] flex flex-col w-[242px] h-[300px] float-left rounded-xl`}>
      <img src={src} alt="loading" className="rounded-xl" />
      <div className={`${Style.captionTitle} pt-5`}>{content}</div>
      <div className={`text-gray-500 text-center`}>{Author}</div>
    </div>
  );
};

const Category = () => {

  return (
    <div className="relative mb-16 flex flex-col space-y-10 items-center justify-center">
       <div
        aria-hidden="true"
        className='absolute top-16 right-0 w-32 h-96 rounded-full bg-gradient-to-b from-violet-950 to-[#0F051D] blur-3xl scale-y-100 opacity-90'
      ></div>
      <div className={`absolute -top-10 left-0 w-64 h-64 rounded-full -rotate-45 bg-gradient-to-b from-violet-950 to-[#0F051D] blur-3xl scale-y-100 opacity-90`}></div>
      <div  id="subTitle" className={`${Style.subTitle} mt-16 mb-20 text-center`}>Our Best Collections</div>
      <div className="flex justify-center lg:space-x-8 flex-wrap flex-row">
        {items.map((it, index) => (
          <Insert key={index} src={it.src} content={it.title} position={index%2!==0} Author={it.author}/>
        ))}
      </div>
      <Link to="/articlesList">
      <button className={`btn border-0 ${Style.button} cursor-pointer text-center`}>
          Show more
      </button>
      </Link>
    </div>
  );
};

export default Category;

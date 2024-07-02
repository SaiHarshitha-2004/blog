import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import cloud from '../homeimages/cloud.jpg';
import data from '../homeimages/data.jpeg';
import devops from '../homeimages/devops.jpg';
import proAndDev from '../homeimages/proAndDev.jpg';

const items = [
  { src: cloud, 
     content: { 
      title: 'Cloud Computing' , description:'It provides on-demand access to virtualized computing resources and rapid deployment of applications.'} },
  {
    src: data, 
    content: {
       title: 'Data Management', description:'encompasses the systematic organization, storage, and retrieval of'} },
  { src: devops,
    content: {
      title:'DevOps',description:'is a cultural and technical methodology that integrates software development and IT operations'} },
  { src: proAndDev, 
    content: {
      title:'Programming and Development', description:'involve the creation of software applications through coding, programming languages and frameworks'  } },
];

const Insert = ({ src, content , position}) => {
  return (
    <div className={`flex md:flex-row flex-col lg:flex-row lg:w-1/2 mb-4`}>
    <div className={`lg:w-1/2 md:w-full cursor-pointer lg:${position === 0 ? 'order-1' : 'order-0'} md:${position ? 'order-1' : 'order-0'}`}>
      <img src={src} alt="technology" className='w-full lg:h-full'/>
    </div>
    <div className={`lg:w-1/2 border border-gray-300 ml-2 mr-2 md:w-full flex flex-col items-center justify-center p-2 lg:${position === 0 ? 'order-0' : 'order-1'}`}>
      <p className='bg-white p-2 rounded-xl font-semibold'>{content.title}</p>
      <p className='text-center'>{content.description}</p>
    </div>
  </div>
  );
};

const Category = () => {
  const [showCategory, setShowCategory] = useState(false);

  const ShowDropDown = () => {
    setShowCategory(!showCategory);
  };

  return (
    <div>
      <div className="mt-3 pb-2 flex flex-wrap flex-row items-center">
        <button onClick={ShowDropDown} className="text-blue-600 font-semibold flex active:mr-2 ml-5 flex-row">
          Category
        </button>
        <span className="ml-2 text-blue-600 active:border active:border-black active:rounded-l">
          <IoIosArrowForward />
        </span>
        {showCategory && (
          <div className="flex flex-wrap flex-row">
            <p className="ml-3 mr-5">technology</p>
            <p className="mr-5">science</p>
            <p className="mr-5">guides</p>
          </div>
        )}
      </div>
      <p className="border border-b-mint mb-5"></p>
      <div className="flex flex-wrap flex-col lg:flex-row">
        {items.map((it, index) => (
          <Insert key={index} src={it.src} content={it.content} position={index%2!==0} />
        ))}
      </div>
    </div>
  );
};

export default Category;

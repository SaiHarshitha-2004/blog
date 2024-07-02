import React, { useEffect, useState } from 'react';
import { InitialState } from '../context/context.jsx';
import { Link } from 'react-router-dom';
// import dotenv from 'dotenv';

// dotenv.config();

const DynamicData = () => {
  const [items, setItems] = useState([]);
  const { search } = InitialState();

  // https://cse.google.com/cse?cx=${cx}&q=${search}

  useEffect(() => {
    const fetchGoogleData = async () => {
      try {
        const res = await fetch(`/api/search?query=${search}`);
        const data = await res.json();
        setItems(data.items);
        console.log(items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGoogleData();
  }, [search , items]);


  return (
    <div className='flex flex-col border border-hidden'>
   <div className='flex flex-col'>
   {items.map((it, index) => (
      <div key={index} className='w-full flex flex-col m-2'>
        <div className='flex flex-col lg:p-5 md:p-4'>
          <div>
            <p className='pb-2 text-xl font-semibold'>🛩️{it.title}</p>
            <div className='flex flex-col hover:text-blue-500'>
              <Link to={it.formattedUrl} className='cursor-pointer'>
                Visit {it.formattedUrl} here
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
   </div>
  </div>
  );
};

export default DynamicData;

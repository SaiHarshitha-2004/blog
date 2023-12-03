import React, { useEffect, useState } from 'react';
import { InitialState } from '../context/context';
import { Link } from 'react-router-dom';

const DynamicData = () => {
  const [items, setItems] = useState([]);
  const api_key = process.env.REACT_APP_GOOGLE_API_KEY;
  const cx = process.env.REACT_APP_GOOGLE_ENGINE_ID;
  console.log(api_key,cx);
  const { search } = InitialState();

  useEffect(() => {
    const fetchGoogleData = async () => {
      try {
        const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${cx}&q=${search}`);
        const data = await res.json();
        setItems(data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGoogleData();
  }, [api_key, cx, search]);

  return (
    <div className='flex flex-col m-2'>
      {items.map((it, index) => (
        <div key={index} className='flex flex-col m-2'>
           <div className='flex flex-col text-center lg:p-5 md:p-4 border border-blue-200'>
            <div>
                <p>{it.title}</p>
                <p>docs link</p>
                <div className='flex flex-col'>
                    <Link to={it.link} className='cursor-pointer'>
                        Visit {it.displayLink} here
                    </Link>
                    <Link to={it.formattedUrl} className='cursor-pointer'>
                        Visit {it.formattedUrl} here
                    </Link>
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicData;

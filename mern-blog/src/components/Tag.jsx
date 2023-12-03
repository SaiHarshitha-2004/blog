// Tag.jsx
import React, { useEffect, useState } from 'react';
import Likes from '../components/Likes';
import { FaGreaterThan, FaLessThan} from 'react-icons/fa';
import { TfiPencilAlt } from "react-icons/tfi";
import DynamicData from '../data.js/DynamicData';
import { useNavigate } from 'react-router-dom';

const Tag = ({ search }) => {
  const navigate = useNavigate()
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://dev.to/api/articles?tag=${search}&page=${page}&per_page=20`);
      const data = await res.json();
      const filter = data.filter((art) => art.cover_image);
      setItems(filter);
    };

    fetchData();
  }, [search, page]);

  const OnClick = () => {
     navigate(`/articlesList/${search}/docs`)
  }
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className='border border-blue-500'>
      <div className='flex flex-row'>
        <div className='flex-1/4 w-1/4 p-10'>
          <div className='sticky top-0'>
            <p>{search}..</p>
            <div className='flex h-1/4 flex-col w-full p-2 border border-red-200'>
              <div>
                <button onClick={()=> OnClick()} className='p-2'> click here for 👇</button>
                <div className='ml-3'>
                  <p className='p-2'>docs</p>
                  <p className='p-2'>coding practices</p>
                  <p className='p-2'>Tutorial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 overflow-auto lg:w-3/4 mr-5'>
          <div className='flex flex-col h-full overflow-y-hidden'>
            {items.map((it, index) => (
              <div key={index} className='flex lg:w-3/4 m-5 p-4 hover:shadow-2xl border hover:border-gray-50'>
                <div className='w-1/2 pr-4'>
                  <img className='w-full' src={it.cover_image} alt={`Article ${index} cover`} />
                </div>
                <div className='w-3/4 flex flex-col'>
                  <p className='text-center pt-1 '>{it.title}</p>
                  <p>{it.description}</p>
                  <p>{it.readable_publish_date}</p>
                  <Likes id={it.id} initialCount={it.positive_reactions_count} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex float-right p-3'>
        <button onClick={handlePrevPage} className='mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'>
          <span> <FaLessThan /></span>
        </button>
        <p className='ml-3 p-3 mr-3'>{page}</p>
        <button onClick={handleNextPage} className='mr-3 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          <span> <FaGreaterThan /></span>
        </button>
      </div>
    </div>
  );
};

export default Tag;

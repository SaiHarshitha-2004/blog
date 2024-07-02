// Tag.jsx
import React, { useEffect, useState } from 'react';
import Likes from '../components/Likes';
import { FaGreaterThan, FaLessThan} from 'react-icons/fa';
import { TfiPencilAlt } from "react-icons/tfi";
import DynamicData from '../data.js/DynamicData';
import { useNavigate } from 'react-router-dom';
import About from '../pages/about';

const Tag = ({ search }) => {
  const navigate = useNavigate()
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://dev.to/api/articles?tag=${search}&page=${page}&per_page=30`);
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
     <>
     <p className='text-center p-2 font-extrabold font-serif'>{search}</p>
      <div className='flex flex-col'>
      <div className='flex  w-full mx-auto flex-auto overflow-auto'>
          <div className='flex flex-row justify-center w-full flex-wrap  h-full overflow-x-clip overflow-y-clip'>
            {items.map((it, index) => (
              <div key={index} className='flex  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex-col m-5 p-4 hover:shadow-2xl border hover:border-gray-50'>
                <div>
                  <img className='w-full object-fill' src={it.cover_image} alt={`Article ${index} cover`} />
                </div> 
                <div className='flex flex-col flex-wrap'>
                  <p className='text-center pt-1 '>{it.title}</p>
                  <p>{it.description.slice(0,30)}..</p>
                  <p>{it.readable_publish_date}</p>
                  <Likes id={it.id} initialCount={it.positive_reactions_count} />
                </div>
              </div>
            ))}
          </div>
        </div>
      <div className='flex justify-end p-3'>
        <button onClick={handlePrevPage} className='mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'>
          <span> <FaLessThan /></span>
        </button>
        <p className='ml-3 p-3 mr-3'>{page}</p>
        <button onClick={handleNextPage} className='mr-3 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          <span> <FaGreaterThan /></span>
        </button>
      </div>
      <div>
        <p className='text-xl p-2 m-2 '>references and links 🔗</p>
        <DynamicData />
      </div>
      <About />
      </div>
    </>
  );
};

export default Tag;

import React, { useEffect, useState } from 'react'
import ArticlesList from '../pages/ArticlesList';
import Likes from './Likes';
import { InitialState } from '../context/context';
import { FaGreaterThan , FaLessThan } from 'react-icons/fa';


const LatestArticles = () => {
  const [items,setItems] = useState([])
  const [page,setPage] = useState(1)
  const latestActive = InitialState()

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch(`https://dev.to/api/articles/latest?page=${page}&per_page=20`);
      const data = await res.json();
      const articlesWithImages = data.filter((art) => art.cover_image);
      setItems(articlesWithImages);
    };
    fetchArticles();
  }, [page]);
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return (
      latestActive && (
      <div className='mb-5 pb-5'>
        <ArticlesList/>
        <div className='flex flex-wrap flex-row justify-center md:p-3 lg:p-6'>
          {items.map((it, index) => (
            <div key={index} className='flex lg:w-1/3 m-5 p-4 hover:shadow-2xl border hover:border-gray-50'>
              <div className='w-1/4 pr-4'>
                <img  className="mb-3"src={it.cover_image} alt={`Article ${index} cover`} />
                <p className='flex flex-row justify-center'>
                  <Likes id={it.id} initialCount={it.public_reactions_count}/>
                </p>
              </div>
              <div className='w-3/4 flex flex-col'>
                <p className='ext-center pt-1'>{it.title}</p>
                <p>{it.description.slice(0,20)}..</p>
                <p>{it.readable_publish_date} </p>
              </div>
            </div>
          ))}
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
    ))
}

export default LatestArticles;

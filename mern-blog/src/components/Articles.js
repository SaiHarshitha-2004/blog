import React from 'react'
import { Link } from 'react-router-dom';
import Style from './style';


const Articles = ( {articles} ) => {
  return (
    <>
         {articles.map((article, index) => (
          <div key={index} className='p-4 m-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <div className='h-full overflow-hidden mb-5'>
              <Link to={`/article/${article.name}`}>
                <img
                  src={article.image}
                  alt="articles-blog"
                  className='lg:h-48 md:h-36 w-full object-cover object-center '
                />
              </Link>
              <div className='p-6'>
                <Link to={`/article/${article.name}`}>
                  <h2 className={Style.heading}>{article.title}.initialize()</h2>
                </Link>
                <p className='leading-relaxed mb-3 p-2'>{article.content[0].substring(0, 100)}..</p>
                <div className='flex items-center flex-wrap'>
                  <Link
                    to={`/article/${article.name}`}
                    className='text-blue-500 font-semibold text-center md:mb-2 lg:mb-0'
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

    </>
  )
}

export default Articles
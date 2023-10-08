import React from 'react';
import articleContent from './art-con';
import Style from '../components/style';
import Articles from '../components/Articles';

const ArticlesList = () => {
  return (
    <div>
      <h1 className={Style.title}>Articles</h1>
      <div className='flex flex-wrap justify-center w-full'>
         <Articles articles={articleContent} />
      </div>
    </div>
  );
};

export default ArticlesList;

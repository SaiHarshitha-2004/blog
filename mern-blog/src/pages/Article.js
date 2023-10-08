// for one Article

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Style from '../components/style';
import articleContent from './art-con';
import Articles from '../components/Articles';
import Error from './Error';
import AddComments from '../components/AddComments';
import CommentsList from '../components/CommentsList';

const Article = () => {
  const { name } = useParams();
  const selectedArticle = articleContent.find((a) => a.name === name);
  const [articleInfo,setArticleInfo] = useState({comments:[]});

  useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch(`/api/articles/${name}`);
      console.log("result from fetch",res)
      const body = await res.json();
      // console.log("body",body)
      setArticleInfo(body)
      // console.log("setArticleInfo:",articleInfo)
    };
    fetchData()
  },[name])

  if (!selectedArticle) {
    return <Error />
  }

  const remaining = articleContent.filter( (a) => a.name !== name)

  return (
    <>
      <div className={Style.title}>{selectedArticle.name.toUpperCase()}</div>
      <div className={`${Style.heading} lg:text-2xl md:text-xl`}>{selectedArticle.title}</div>
      <div className='flex justify-center'>
        <div  className='flex  justify-center w-1/2 m-4'>
          <img src={selectedArticle.image} alt='article image is not loading' className='lg:w-64 lg:h-64 md:w-64'/>
        </div>
      </div>
         <div className='flex flex-col justify-center items-center'>
          {selectedArticle.content.map((content, index) => (
              <p key={index} className={`${Style.subHeading} lg:text-xl md:text-l mb-2 ml-4 `}>{content}</p>
            ))}
        </div>
          <CommentsList comments = {articleInfo.comments} />              
          <div className='flex flex-col justify-center items-center'>
            <AddComments articleName={name} setArticleInfo={setArticleInfo} />
         </div>
          <h2 className={`${Style.heading} lg:text-2xl ms:text-xl`}>Other Articles</h2>
          <div className='flex flex-wrap '>
            <Articles articles={remaining} />
          </div>
    </>
  );
};

export default Article;

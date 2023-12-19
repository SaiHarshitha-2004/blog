import React, { useEffect, useState } from 'react';
import { formatISO9075 } from 'date-fns';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  const { postId } = useParams();
  const [single, setSingle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/blogwebsites/${postId}`);
        const data = await res.json();
        setSingle(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching single post', error);
      }
    };

    fetchData();
  }, [postId]);

  const coverSrc = single.cover ? `/uploads/${single.cover.split('\\').slice(-1)[0]}` : '';

  return (
    <div className="flex flex-col justify-center w-full h-full items-center m-3">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex-shrink-0 w-1/4">
            {coverSrc && (
              <img className="w-full h-full object-cover" src={coverSrc} alt="" />
            )}
          </div>

          <div className="flex-grow w-full h-1/2 ml-3 p-2 cursor-pointer">
            <div className="text-center">{single.title}</div>
            <div className="text-center">{single.summary}</div>
            <div dangerouslySetInnerHTML={{ __html: `${single.content}` }}></div>
            <div className="flex flex-row">
              <p className="pr-2">created At:</p>
              <time>{formatISO9075(new Date(single.createdAt))}</time>
            </div>
            <div className="flex flex-row">
              <p className="pr-2">updated At:</p>
              <time>{formatISO9075(new Date(single.updatedAt))}</time>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SinglePost;

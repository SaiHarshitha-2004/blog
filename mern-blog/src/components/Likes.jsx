import React, { useState } from "react";
import { FaThumbsUp } from 'react-icons/fa';
import { BiSolidCommentDots } from 'react-icons/bi';

const Likes = ({ id, initialCount }) => {
  const [likes, setLikes] = useState({
    [id]: {
      liked: false,
      count: initialCount,
    },
  });

  const changeColorAndLike = () => {
    setLikes((prevLikes) => {
      const likedValue = prevLikes[id]?.liked ? false : true;
      const c1 = prevLikes[id]?.count || 0;
      const countValue = prevLikes[id]?.liked ? c1 - 1 : c1 + 1;

      return {
        ...prevLikes,
        [id]: {
          liked: likedValue,
          count: countValue,
        },
      };
    });
  };

  return (
    <div className='flex flex-row'>
      <span className='mr-3'>
        <FaThumbsUp
          className={likes[id]?.liked ? 'text-red-400' : 'text-blue-400'}
          onClick={changeColorAndLike}
        />
      </span>
      <span className='mr-3'>{likes[id]?.count} </span>
      <span className='pt-1 mr-3'>
        <BiSolidCommentDots />
      </span>
    </div>
  );
};

export default Likes;

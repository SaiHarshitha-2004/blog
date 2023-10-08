import React from "react";
import {BiSolidCommentDots} from 'react-icons/bi';

const CommentsList = ({ comments }) => {
  return (
    <>
      <div className="flex flex-col items-center lg:w-1/2 md:w-1/4 mb-5">
        <h3 className='sm:text-2xl text-blue-500 text-xl font-bold my-6'>
          Comments :
        </h3>
        <div>
          {comments.map((comment, index) => (
            <div key={index} className="ml-auto mr-4 ">
              <h4 className='text-xl font-bold flex items-center '>
                 <BiSolidCommentDots />
                 <span  className="ml-5">{comment.username}</span>
              </h4>
              <p className='ml-20 p-2 mt-3 border border-gray-200 rounded-xl mt-1 mb-4'>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default CommentsList;
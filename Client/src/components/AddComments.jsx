import React, { useState } from 'react';
import { BiSolidCommentDots } from 'react-icons/bi';
import Style from './style'; 

const AddComments = ({ id }) => {
  const [comment, setComment] = useState('');

  const appendComments = async () => {

    if(comment.length === 0){
      alert('Please enter a comment');
    }

    else{
      try {
<<<<<<< HEAD
        
=======
        // blog-api url added
>>>>>>> 9e517b034fb200d4e19437d5739f105c4e99fe5f
        const res = await fetch('https://mern-blog-api-cyan.vercel.app/api/addcomments', {
          method: 'POST',
          body: JSON.stringify({ id: id, comment: comment }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (res.ok) {
          setComment('');
          alert('Comment added successfully!');
        } else {
          console.error('Failed to add comment');
        }
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  return (
    <form className='border border-gray-500 p-4 space-y-6 rounded-lg'>
      <div className="flex flex-col space-y-6">
        <label htmlFor="comment" className="text-gray-500 text-xl font-bold flex flex-row space-x-3 items-center">
          <span><BiSolidCommentDots /></span>
          <span >Comment</span>
        </label>
        <input
          id="comment"
          type="text"
          placeholder="Enter comment.."
          value={comment}
          onChange={e => setComment(e.target.value)}
          className="bg-transparent text-white border-b-2 focus:outline-none focus:border-violet-500 pb-2"
        />
      </div>
      <div className='flex justify-end'>
      <button type="button" onClick={appendComments} className={`btn border-0 ${Style.button} cursor-pointer text-center`}>
        Add Comment
      </button>
      </div>
    </form>
  );
};

export default AddComments;

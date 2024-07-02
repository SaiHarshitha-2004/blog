import React , {useState , useEffect} from 'react'

import { BentoGrid, BentoGridItem } from "../Ui/bento-grid.tsx";
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";


const ShowAllPosts = () => {

    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    
    const formatDate = (timestamp) => {
      const date = new Date(timestamp);
      return date.toISOString().split('T')[0];
    };

    const ShowPost = (postId) => () => {
        navigate(`/MyPost/${postId}`);
    };
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/blogwebsites');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setPosts(data); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData(); 
    }, []); 


  return (
    <div className=''>
        <div className='flex mt-12 flex-row justify-center flex-wrap '>
            {posts.map( (post , index) => {
                return (
                    <div onClick={ShowPost(post._id)} key={index} className='bg-[#44315d89] rounded-md cursor-pointer m-5 hover:shadow-sm hover:shadow-violet-500 focus:w-[330px] focus:h-[280px] p-5 overflow-hidden  w-[350px] h-[300px] text-white flex flex-col justify-center space-y-2 items-center'>

                         <img src={post.image} alt="" className='w-full h-full rounded-md' />
                         <p>{post.title}</p>

                        {/* <p>{post.summary}</p>

                        <div dangerouslySetInnerHTML={{ __html: post.description }} className="space-y-12" />
                         */}
      <p>{formatDate(post.createdAt)}</p>
      </div>
                )
            })}
        </div>
    </div>
  )
}

export default ShowAllPosts
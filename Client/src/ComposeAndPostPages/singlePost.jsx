import React, { useEffect, useState } from "react";
import { formatISO9075 } from "date-fns";
import { useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { InitialState } from "../context/context";

const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const {user}  = InitialState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://mern-blog-api-one.vercel.app/api/blogwebsites/${postId}`
        );
        const data = await res.json();
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching single post", error);
      }
    };

    fetchData();
  }, [postId]);

  return (
    <div className="flex text-white flex-col justify-center w-full h-full items-center m-3">
      {loading ? (
         <Stack sx={{ color: 'grey.500'  }} spacing={2} direction="row">
         <CircularProgress color="secondary" /> 
         </Stack>
      ) : (
        <div className="w-full flex flex-col space-y-8 p-8">
          <h1 className="text-3xl text-center text-white font-bold mb-4">
            {post.title}
          </h1>

          <div className="flex flex-row items-center space-x-7">
            <CgProfile className="w-12 h-12" />

            <div className="text-lg  space-y-3 justify-start text-left flex flex-col">
              <div className="flex flex-row space-x-6">
              <p>{user}</p>
              <p className="text-green-500">. Follow</p>
              </div>
              <div className="flex-row flex  space-x-4">
              <p className="text-gray-500">
                Published on 
              </p>{" "}
              <p>
              {formatISO9075(new Date(post.createdAt))}
              </p>
                </div>
            </div>
          </div>

          <img className="w-full" src={post.image} alt="" />
          <p className="space-y-3 text-center text-lg">{post.summary}</p>

          <div
            dangerouslySetInnerHTML={{ __html: post.description }}
            className="text-lg flex flex-col justify-center items-center space-y-12"
          />
        </div>
      )}
    </div>
  );
};

export default SinglePost;

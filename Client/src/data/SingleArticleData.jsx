import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { formatISO9075 } from "date-fns";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import AddComments from "../components/AddComments.jsx";

const SingleArticleData = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dev.to/api/articles/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        console.log("Article data:", result);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return (
        <div className="w-full h-full flex justify-center">
            <Stack sx={{ color: 'grey.500'  }} spacing={2} direction="row">
           <CircularProgress color="secondary" /> 
        </Stack>

        </div>
    )
  }


  return (
    <>
      <h1 className="text-3xl mt-32 text-center text-white font-bold mb-4">
        {data.title}
      </h1>
      <div className="text-white justify-center flex lg:flex-row lg:space-x-12 mt-12 space-y-6 flex-col p-4">
        {/* content side */}
        <div className="lg:w-1/2 flex-col space-y-10 justify-center">
           <img src={data.cover_image} alt="loading" />
          <p className="text-lg mb-4 text-center">{data.description}</p>
          <div dangerouslySetInnerHTML={{ __html: data.body_html }} className="space-y-12" />
        </div>

        <div className="flex flex-col space-y-5  border-spacing-1 lg:w-1/4 items-center">
        
          {/* user details */}
           <div>
             {data.user.profile_image != null ? (
                          <img
                          className="w-32 h-32 shadow-sm shadow-white rounded-full mr-4"
                          src={data.user.profile_image}
                          alt={data.user.name}
                        />

                      ) : (
                        <CgProfile className="w-32 h-32 shadow-sm shadow-white rounded-full mr-4"/>
                      )}
             </div>
             <div className="flex flex-row space-x-6 items-center">
             <p className="text-xl text-center font-bold">{data.user.name}</p>
             <p className="text-green-500">. Follow</p>

             </div>


          {/* Tags And comments */}
          <div className="flex pl-3 mt-4 flex-col w-full space-y-14 mb-4">

            {/* Tags */}
            {
              data && data.tags && data.tags.length > 0 ? (
                <div className="flex flex-wrap w-2/3 mt-4 lg:w-full p-5 text-md space-y-3 flex-col border border-gray-100 rounded-lg">
                  <p className="text-gray-500 text-xl">Tags</p>
                  <div className="flex flex-row flex-wrap items-center">
                    {data.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="border p-3 m-2 max-w-fit font-semibold text-gray-700"
                      >
                        {tag.toUpperCase()}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )
            }

            {/* Article metadata */}
            <div className="flex w-full justify-center  space-y-8 flex-col">
              <div className="flex text-xl space-y-4 flex-col">
                <p className="flex flex-row items-center space-x-6">
                  <span>
                    <CiCalendar  className="text-violet-500" />
                  </span>
                  <span>{data.readable_publish_date}</span>
                  <p>
                  {formatISO9075(new Date(data.published_timestamp))}
                  </p>
                  {/* <span className="text-gray-400">{data.published_timestamp}</span> */}
                </p>
                <p className="flex flex-row items-center space-x-6">
                  <span >
                    <FaRegComments  className="text-violet-500" />
                  </span>
                  <span>{data.comments_count}</span>
                  <span>COMMENT</span>
                </p>
  
              </div>
            </div>

            {/* Add comment */} 

            <AddComments id = {data.id} />


          </div>
        </div>
      </div>
    </>
  );
};

export default SingleArticleData;

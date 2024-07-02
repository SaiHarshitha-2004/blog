import { Navigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { PiSubtitlesThin } from "react-icons/pi";
import { MdOutlineSummarize, MdOutlineDescription } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import Style from "../components/style";
import axios from "axios";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
};

const Compose = () => {
  const [inputs, setInputs] = useState({
    title: "",
    summary: "",
    image: "",
    description: ""
  });
  const [filePreview, setFilePreview] = useState(null);
  const [isImageValid, setIsImageValid] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [showSuccessPop, setShowSuccessPop] = useState(false);
  const editorRef = useRef(null);

  const PopUp = (val) => {
    showSuccessPop(val);
    if (!val) {
      setRedirect(true);
    }
  };

  const CreateNewPost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/blogwebsites", {
        title: inputs.title,
        summary: inputs.summary,
        image: inputs.image,
        description: inputs.description,
        credentials: "include",
      });

      if (response.status === 200) {
        console.log("response is ", response.data);
        PopUp(true);
      } else {
        console.error("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === 'image') {
      setFilePreview(value);
      setIsImageValid(true);
    }
  };

  const handleDescriptionChange = (value) => {
    setInputs((prevState) => ({
      ...prevState,
      description: value,
    }));
  };

  const handleImageError = () => {
    setIsImageValid(false);
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="relative mt-20 lg:ml-16 lg:mr-16">
      <style>
        {`
          .ql-editor.ql-blank::before {
            color: white;
          }
        `}
      </style>
      <div className="space-y-6 m-16 h-full">
        <form onSubmit={CreateNewPost} encType="multipart/form-data" className="flex flex-col space-y-12">
          <div className="flex flex-col space-y-6">
            <label htmlFor="title" className="text-gray-500 text-lg font-bold flex flex-row space-x-3 items-center">
              <span><PiSubtitlesThin /></span>
              <span>Title</span>
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter title"
              value={inputs.title}
              onChange={handleInputChange}
              className="bg-transparent text-white border-b-2 focus:outline-none focus:border-violet-500 pb-2"
            />
          </div>

          <div className="flex flex-col space-y-6">
            <label htmlFor="summary" className="text-gray-500 text-lg font-bold flex flex-row space-x-3 items-center">
              <span><MdOutlineSummarize /></span>
              <span>Summary</span>
            </label>
            <input
              id="summary"
              name="summary"
              type="text"
              placeholder="Enter summary"
              value={inputs.summary}
              onChange={handleInputChange}
              className="bg-transparent text-white border-b-2 focus:outline-none focus:border-violet-500 pb-2"
            />
          </div>

          <div className="flex flex-col space-y-6">
            <label htmlFor="image" className="text-gray-500 text-lg font-bold flex flex-row space-x-3 items-center">
              <span><CiImageOn /></span>
              <span>Upload Image</span>
            </label>
            <input
              id="image"
              name="image"
              type="text"
              placeholder="Enter image URL"
              value={inputs.image}
              onChange={handleInputChange}
              style={{ color: 'white' }}
              className="bg-transparent text-white border-b-2 focus:outline-none focus:border-violet-500 pb-2"
            />
            {filePreview && (
              <div className="mt-4">
                <img 
                  src={filePreview} 
                  alt="Preview" 
                  className="w-1/2 h-auto rounded" 
                  onError={handleImageError}
                  style={{ display: isImageValid ? 'block' : 'none' }}
                />
                {!isImageValid && (
                  <div className="text-red-500">Image not found</div>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-col space-y-6">
            <label htmlFor="description" className="text-gray-500 text-lg font-bold flex flex-row space-x-3 items-center">
              <span><MdOutlineDescription /></span>
              <span>Description</span>
            </label>
            <ReactQuill
              ref={editorRef}
              theme="snow"
              value={inputs.description}
              onChange={handleDescriptionChange}
              modules={modules}
              placeholder="Add a description about your post"
              className="bg-transparent md:h-30 sm:h-30 h-40 text-white focus:outline-none focus:border-violet-500 pb-10"
            />
          </div>

          <div className="flex justify-center mt-10">
            <button type="submit" className={`btn border-0 ${Style.button} cursor-pointer text-center`}>
              Create Post
            </button>
          </div>
        </form>
      </div>

      {showSuccessPop && (
        <div style={{zIndex : 1000}} className=" fixed top-5 left-0 w-full max-h-fit flex justify-center">
          <div className="bg-white border border-gray-300 p-8 rounded shadow-lg">
            <p className="text-violet-500 pb-2 text-lg">Post created successfully!</p>
            <button
              className="mt-4 mr-4 px-4 py-2 bg-violet-500 pb-2 text-white rounded"
              onClick={() => PopUp(false)}
            >
              OK
            </button>
            <button
              className="mt-4 px-4 py-2 bg-violet-500 pb-2 text-white rounded"
              onClick={() => PopUp(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compose;

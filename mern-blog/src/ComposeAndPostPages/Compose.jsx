import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
 toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
 ],
};

const Compose = () => {
 const [title, setTitle] = useState("");
 const [summary, setSummary] = useState("");
 const [content, setContent] = useState("");
 const [file, setFile] = useState(null);
 const [redirect, setRedirect] = useState(false);

 const CreateNewPost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("content", content);
    formData.append("file", file);

    // console.log("files is :" , file[0].name , file[0].type)


    try {
      const response = await fetch("http://localhost:3001/api/blogwebsite", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (response.ok) {
        setRedirect(true);
        console.log("Post created successfully");
      } else {
        console.log("response is ",response)
        console.error("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
 };

 if (redirect) {
    return <Navigate to={"/"} />;
 }
  return (
    <form onSubmit={CreateNewPost} encType="multipart/form-data" className='flex flex-col [&_input]:p-2 [&_input]:m-2 [&_input]:border'>
      <input type='title' placeholder={'title'} value={title} onChange={e => setTitle(e.target.value)}/>
      <input type="summary" placeholder={'Summary'}value={summary} onChange={e => setSummary(e.target.value)} />
      <input type="file" name="file" 
             onChange={ev => setFile(ev.target.files)} />      
      <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules}/>
      <div className='flex justify-center'>
         <button type="submit" className='mt-5 w-1/2 focus:bg-blue-500 focus:text-white bg-mint text-blue-700  p-2'>create post</button>
      </div>
    </form>
  )
};

export default Compose;
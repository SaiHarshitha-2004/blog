import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRef } from "react";

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
 const [title, setTitle] = useState("");
 const [summary, setSummary] = useState("");
 const [content, setContent] = useState("");
 const [file, setFile] = useState(null);
 const [redirect, setRedirect] = useState(false);
 const [showSuccessPop , setShowSuccessPop] = useState(false)
 const [edit , setEdit] = useState(true)
 const editorRef = useRef(null)

 const PopUp = ({val}) => {
     if(val === false){
        setShowSuccessPop(val)
        setRedirect(true)
     }
     else{
        setShowSuccessPop(val)
     }
 }

 const CreateNewPost = async (e) => {
    e.preventDefault();
    

    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("content", content);
    formData.append("file[]", file[0]);

    try {
      const response = await fetch("http://localhost:3001/api/blogwebsites", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (response.ok) {
        console.log("Post created successfully");
        PopUp({val:true})
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
    <div>
      <div>
      {edit &&  
          <form onSubmit={CreateNewPost} encType="multipart/form-data" className='flex flex-col [&_input]:p-2 [&_input]:m-2 [&_input]:border'>
          <input type='title' placeholder={'title'} value={title} onChange={e => setTitle(e.target.value)}/>
          <input type="summary" placeholder={'Summary'}value={summary} onChange={e => setSummary(e.target.value)} />
          <input type="file" name="file[]" 
                onChange={ev => setFile(ev.target.files)} multiple/>      
          <ReactQuill ref={editorRef} theme="snow" value={content} onChange={setContent} modules={modules} placeholder="Add a desciption about your post"/>
          <div className='flex justify-center'>
            <button type="submit" className='mt-5 w-1/2 focus:bg-blue-500 focus:text-white bg-mint text-blue-700  p-2'>create post</button>
          </div>
        </form>
      }
    </div>
    {showSuccessPop && (
        <div className="fixed top-5  left-0 w-full max-h-fit flex justify-center">
          <div className="bg-white border border-gray-300 p-8 rounded shadow-lg">
            <p className="text-blue-500 text-lg">Post created successfully!</p>
            <button
              className="mt-4 mr-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => PopUp({val:false})}
            >
              OK
            </button>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => PopUp({val:false})}
            >
              cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
};
export default Compose
import SinglePost from "../ComposeAndPostPages/singlePost"; 
import {useEffect, useState} from "react";

export default function MyPost() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/blogwebsites').
    then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    })
    .catch(err => {
        console.error(err);
    })
    ;
  }, []);
  return (
    <>
      {posts.length > 0 && posts.map( (item,index)  => (
        <div key={index}>
          <div>
             <img src={item.cover} alt="ehjf" />
           </div>
           <div>{item.title}</div>
           <div>{item.summary}</div>
           <div>{item.content}</div>
           <div>{item.createdAt}</div>
           <div>{item.updatedAt}</div>
        </div>
      ))}
    </>
  );
}
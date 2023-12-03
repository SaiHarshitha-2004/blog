import SinglePost from "../ComposeAndPostPages/singlePost"; 
import {useEffect, useState} from "react";

export default function MyPost() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/blogwebsite').
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
      {posts.length > 0 && posts.map(post => (
        <SinglePost />
      ))}
    </>
  );
}
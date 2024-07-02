import {useEffect, useState} from "react";
import {formatISO9075} from "date-fns";
import { InitialState } from '../context/context';
import { useNavigate } from "react-router-dom";

export default function MyPost() {

  const navigate = useNavigate()
  const [posts,setPosts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const {setPostId} = InitialState()

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

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const showSinglePost = ({_id}) => {
    setPostId(_id)
    navigate(`/myPost/${_id}`) 
  }

  return (
    <div className="flex justify-center h-full w-full">
      <div className="w-full p-3">
      {posts.length > 0 && posts.map( (item,index)  => (
        <div key={index} className="h-1/3 bg-gray-100 flex items-stretch m-3">
            <div className="flex-shrink-0 w-1/4 border border-blue-700">
            <img className='w-full h-full object-cover cursor-pointer' src={`/uploads/${item.cover.split('\\').slice(-1)[0]}`} alt=""
            onClick={() => handleImageClick(`/uploads/${item.cover.split('\\').slice(-1)[0]}`)}  />
           </div>

            <div className="flex-grow ml-3 p-2 cursor-pointer" 
               onClick={() => showSinglePost( {
                    _id:item._id
               } )}>
              <div className="font-xl text-center">{item.title}</div>
              <div className="text-center">{item.summary}</div>
              <div dangerouslySetInnerHTML={{ __html: `${item.content.slice(0,50)}..` }}></div>
              <div className="flex flex-row">
                <p className="pr-2">created At:</p>
                <time>{formatISO9075(new Date(item.createdAt))}</time>
              </div>
              <div className="flex flex-row">
                 <p className="pr-2">updated At:</p>
                 <time>{formatISO9075(new Date(item.updatedAt))}</time>
              </div>
            </div>
        </div>
      ))}
      </div>

      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
            <img
              className="w-1/2 h-1/2 object-contain cursor-pointer"
              src={selectedImage}
              alt=""
              onClick={handleCloseModal}
            />
        </div>
      )}
      
    </div>
  );
}
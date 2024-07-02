
import React, { useEffect, useState } from 'react';
const WebScrapping = () => {
  const [items, setItems] = useState([]);
    useEffect(() => {
        // const apiKey = "5YovL81U5C3T9AAzcV5zfvv6";
        const fetchData = async () => {
          const res = await fetch('https://dev.to/api/articles?page=1&per_page=1000')
          const data = await res.json()
          setItems(data)
        }
        fetchData()
    }, []);
console.log(items.length);

  return (
    <div className='flex flex-wrap'>
        {items.map((it, index) => (
          it.cover_image &&
          (<div key={index} className='border border-blue-500 md:w-1/6 m-5 flex flex-wrap flex-col'>
              <img src={it.cover_image} alt={it.title} />
              <p>{it.title}</p>
              <p>{it.description}</p>
          </div>)
        ))}
    </div>
  );
};

export default WebScrapping;

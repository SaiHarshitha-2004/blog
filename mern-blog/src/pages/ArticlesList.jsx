import React, { useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { GoSearch } from 'react-icons/go'
import Tag from '../components/Tag';
import { InitialState } from '../context/context';
import About from './about';
const ArticlesList = () => {
  const navigate = useNavigate()
 const [active, setActive] = useState('latest');
 const {latestActive , setLatestActive , showTag , setShowTag , search , setSearch} = InitialState()

  const toggleTab = () => {
      setActive('latest');
      setShowTag(false)
      setLatestActive(true)
      navigate('/articlesList')
      setSearch('')
  };
  const searchTag = (event) => {
    if (event.key === 'Enter') {
      setLatestActive(false)
      navigate('/articlesList/search')
      setShowTag(true)     
      setActive('')
    }
  }
 return (
  <div>
    <div className='top-0 z-2'>
        <div className='w-full flex justify-between p-5'>
          <div className='w-1/2 flex flex-row  ml-5 cursor-pointer'>
            <p className={`pr-10 pb-4 pl-3 mr-2 border-b ${active === 'latest' ? `border-blue-500` : `border-white`}`}>
              <button onClick={ ()=> toggleTab()}>latest</button>
            </p>
          </div>
          <div className='w-1/2'>
            <p className="float-right flex items-center">
                <input
                  type="text"
                  placeholder="search by tag..."
                  className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={searchTag}
                />
                <span className="bg-blue-500 text-white px-4 py-2 rounded-r-md flex items-center">
                  <GoSearch className="text-lg" />
                </span>
              </p>
          </div>
        <div>
         
        </div>
      </div>
      <div>
        {showTag && (
          <div>
             <Tag search={search} />
          </div>
        )}
      </div>
    </div>
  </div>
 );
};

export default ArticlesList;
import React from 'react'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { InitialState } from '../context/context.jsx';

const profile = () => {
  const {setProfile} = InitialState()
  return (
    <div onClick={() => setProfile(false)}>
       <div className="p-8 m-2">
        <p className='text-blue-500 text-xl font-semibold tracking-wide'>Profile</p>
        <p className='border border-b-white m-2'></p>
    <div className='flex justify-center mb-6'>
      <CgProfile className='w-1/2 h-1/2'/>
    </div>

    <h2 className="text-2xl font-semibold mb-4">Sai Harshitha Mandapalli</h2>

    <div className="flex items-center mb-4">
      <span className="mr-2 text-gray-500">🫂 Followers:</span>
      <span className="text-blue-500">10502</span>
    </div>

    <div className="flex items-center mb-4">
      <span className="mr-2 text-gray-500">📤 Posts:</span>
      <span className="text-blue-500">68</span>
    </div>

    <div className="flex items-center mb-4">
      <span className="mr-2 text-gray-500">👍 Likes:</span>
      <span className="text-blue-500">3689</span>
    </div>

    <div>
        <p className='p-1'>Activity</p>
        <p className='p-1 text-gray-500'>liked articles</p>
        <p className='p-1 text-gray-500'><Link to ='/MyPost' children='show posts' /></p>
    </div>

    <p className="mt-6 text-gray-700 leading-8">
      Feel free to reach out at saiharshithamandapalli@email.com 📩 
    </p>
  </div>
    </div>
  )
}

export default profile
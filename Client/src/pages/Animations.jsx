import Animi from '../Animations/Animi.json'
import Lottie from 'lottie-react'
import React from 'react'

const Animations = () => {
  return (
    <div className='h-3/4 '>
      <Lottie animationData={Animi} />
    </div>
  )
}

export default Animations

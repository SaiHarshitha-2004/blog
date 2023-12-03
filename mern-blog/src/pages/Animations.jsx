import Animi from '../Animations/Animi.json'
import Lottie from 'lottie-react'
import React from 'react'

const Animations = () => {
  return (
    <div className='h-3/4 z-0'style={{ width: '70%', height: '100%'}} >
      <Lottie animationData={Animi} classname='z-0'style={{ width: '120%', height: '100%'}} />
    </div>
  )
}

export default Animations

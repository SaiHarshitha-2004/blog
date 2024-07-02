import Animi from '../Animations/Animi.json'
import Lottie from 'lottie-react'
import React from 'react'

const Animations = () => {
  return (
    <div className='h-3/4 'style={{width: '70%', height: '100%'}} >
      <Lottie animationData={Animi} style={{width: '120%', height: '100%'}} />
    </div>
  )
}

export default Animations

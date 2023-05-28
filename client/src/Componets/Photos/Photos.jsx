import React from 'react'
import FRAME1 from '../../../public/Frame (1).png'
import './Photos.scss'
import FRAME2 from '../../../public/Frame (2).png'


const Photos = () => {
  return (
    <div className='sh'>
        <img src={FRAME1} alt="" />
        <img src={FRAME2} alt="" />
        
    </div>
  )
}

export default Photos
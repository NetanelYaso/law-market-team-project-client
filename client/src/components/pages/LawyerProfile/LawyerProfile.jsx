import React from 'react'
import ProfileCard from '../../featurs/lawyerProfile/ProfileCard/ProfileCard'
import TitleCard from '../../featurs/lawyerProfile/TitleCard/TitleCard'
import './LawyerProfile.css'

const LawyerProfile = () => {
  return (
    <div className='lawyerContainer'>
      
     
      <TitleCard/>
      <ProfileCard/>

      
    </div>
  )
}

export default LawyerProfile
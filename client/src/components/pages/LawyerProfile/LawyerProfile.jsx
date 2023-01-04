import React from 'react'
import ProfileCard from '../../featurs/lawyerProfile/ProfileCard/ProfileCard'
import TitleCard from '../../featurs/lawyerProfile/TitleCard/TitleCard'

const LawyerProfile = () => {
  return (
    <div className='lawyerContainer'>
      <h1>Lawyer Profile</h1>
     
      <TitleCard/>
      <ProfileCard/>

      
    </div>
  )
}

export default LawyerProfile
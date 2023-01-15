import React from 'react'
import ProfileCard from '../../featurs/lawyerProfile/ProfileCard/ProfileCard'
import TitleCard from '../../featurs/lawyerProfile/TitleCard/TitleCard'
import './LawyerProfile.css'

const LawyerProfile = () => {
  return (
    <div className='lawyerContainer'>
      <div className='row'>
        <div className='col-7'>
          
          <TitleCard/>
          </div>
     
        <div className='col-4'> <ProfileCard/> </div>
      </div>
      
     
      

      
    </div>
  )
}

export default LawyerProfile
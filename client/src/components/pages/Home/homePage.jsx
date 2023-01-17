import React from 'react'
import BottomCard from "../../featurs/home Page featurs/card/bottom-cards/BottomCard"
import HomeCardPage from "../../featurs/home Page featurs/card/main-cards/HomeCardPage"
import Explanation from '../../featurs/home Page featurs/home-page-explanationDiv/Explanation';

function HomePage() {
  return (
    <div className=' container-fluid'>
      <Explanation />
      <HomeCardPage />
      <BottomCard />
    </div>
  )
}
export default HomePage;


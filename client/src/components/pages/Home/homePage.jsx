import React from 'react'
import BottomCard from '../../featurs/home Page featurs/card/bottomCards/BottomCard';
import HomeCardPage from '../../featurs/home Page featurs/card/mainCards/HomeCardPage';
import Explanation from '../../featurs/home Page featurs/homePageExplanationDiv/Explanation';

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


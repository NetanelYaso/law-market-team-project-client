import './App.css';
import ProfileCard from './components/featurs/lawyerProfile/ProfileCard/ProfileCard';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/featurs/Header/Header';
import Footer from './components/featurs/Footer/Footer';
import DetailsCard from './components/featurs/payment/DetailsCard/index';
// import HomeCardPage from './components/featurs/home Page featurs/card/HomeCardPage';
// import LawyerProfile from './components/pages/LawyerProfile/LawyerProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <HomeCardPage />
        <LawyerProfile />
        {/* <GenericCard/> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

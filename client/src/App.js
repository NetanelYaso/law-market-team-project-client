import './App.css';
// import ProfileCard from './components/featurs/lawyerProfile/ProfileCard/ProfileCard';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/featurs/Header/Header';
import Footer from './components/featurs/Footer/Footer';
// import DetailsCard from './components/featurs/payment/DetailsCard/DetailsCard';
// import LawyerCard from './components/featurs/payment/LawyerCard/index';
import PaymentCard from './components/featurs/payment/PaymentCard/index';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <ProfileCard /> */}
        {/* <DetailsCard/> */}
        <PaymentCard/>
        {/* <LawyerCard/> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}
;
export default App;

import './App.css';
// import ProfileCard from './components/featurs/lawyerProfile/ProfileCard/ProfileCard';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/featurs/Header/Header';
import Footer from './components/featurs/Footer/Footer';
// import DetailsCard from './components/featurs/payment/DetailsCard/DetailsCard';
// import LawyerCard from './components/featurs/payment/LawyerCard/index';
import PaymentCard from './components/featurs/payment/PaymentCard/index';
import ConfirmPayment from './components/featurs/payment/confirmPayment/ConfirmPayment';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <ProfileCard /> */}
        {/* <DetailsCard/> */}
        {/* <PaymentCard/> */}
        <ConfirmPayment price={"1000"}/>
        {/* <LawyerCard/> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}
;
export default App;

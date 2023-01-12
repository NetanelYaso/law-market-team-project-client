import "./App.css";
// import Home from "./components/pages/Home/HomePageCard"
import HomeCardPage from "./components/featurs/home Page featurs/card/main-cards/HomeCardPage";
import ProfileCard from "./components/featurs/lawyerProfile/ProfileCard/ProfileCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/featurs/Header/Header";
import Footer from "./components/featurs/Footer/Footer";
import GenericCard from "./components/featurs/GenericCard/GenericCard";
import LawyerProfile from "./components/pages/LawyerProfile/LawyerProfile";
// import BottomCard from "./components/featurs/home Page featurs/card/bottom-cards/BottomCard";
import SubCategory from "./components/pages/SubCategory/SubCategory";
import Login from './components/pages/Login/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <HomeCardPage /> */}
        {/* <LawyerProfile /> */}
        <Login/>
        {/* <SubCategory/> */}
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;

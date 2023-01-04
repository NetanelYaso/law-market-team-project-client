import "./App.css";
// import Home from "./components/pages/Home/HomePageCard"
import HomeCardPage from "./components/featurs/home Page featurs/card/HomeCardPage";
// import ProfileCard from "./components/featurs/lawyerProfile/ProfileCard/ProfileCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/featurs/Header/Header";
import Footer from "./components/featurs/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <HomeCardPage />
        {/* <ProfileCard /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

import "./App.css";
import ProfileCard from "./components/featurs/lawyerProfile/ProfileCard/ProfileCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/featurs/Header/Header";
import Footer from "./components/featurs/Footer/Footer";
import Map from "./components/featurs/Map/Map";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <ProfileCard /> */}
        <Map address="ירושלים" />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

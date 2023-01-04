import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/featurs/Header/Header';
import Footer from './components/featurs/Footer/Footer';
import LawyerProfile from './components/pages/LawyerProfile/LawyerProfile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <LawyerProfile/>
        <Footer />
      </BrowserRouter>
    </div>

// function App() {
//   return (
//     <LawyerProfile/>
   
  );
};
export default App;

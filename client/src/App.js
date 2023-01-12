import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/featurs/Header/Header";
import Footer from "./components/featurs/Footer/Footer";
import Router from "./Router";
import Explanation from "./components/featurs/home Page featurs/home-page-explanationDiv/Explanation";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Explanation/>
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

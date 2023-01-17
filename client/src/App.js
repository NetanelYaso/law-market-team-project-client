import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/featurs/Header/Header";
import Footer from "./components/featurs/Footer/Footer";
import Router from "./Router";
import Navbar from "./components/featurs/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar/>
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

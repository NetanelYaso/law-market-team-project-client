import { Route, Routes } from "react-router-dom"
import ProfileCard from "./components/featurs/lawyerProfile/ProfileCard/ProfileCard"
import PageNotFound from "./components/pages/PageNotFound/PageNotFound"
import SubCategory from "./components/pages/SubCategory/SubCategory"
import Login from "./components/pages/Login/Login"
import SignUp from "./components/pages/SignUp/SignUp"
import DetailsCard from './components/featurs/payment/DetailsCard/index';
import LawyersSelection from "./components/pages/LawyersSelection/LawyersSelection"
import HomePage from './components/pages/Home/homePage';
import Aboutus from "./components/featurs/Rating/Rating"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="/subCategory" element={<SubCategory />} />
            <Route path="/profileCard" element={<ProfileCard />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Aboutus" element={<Aboutus/>} />
            <Route path="/payment" element={<DetailsCard/> } />
            <Route path="/LawyersSelection" element={<LawyersSelection/> } />
            <Route path="*" element={<PageNotFound/> } />
        </Routes>
    )
}

export default Router;
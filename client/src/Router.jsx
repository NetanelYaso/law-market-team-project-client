import { Route, Routes } from "react-router-dom"
import ProfileCard from "./components/featurs/lawyerProfile/ProfileCard/ProfileCard"
// import PaymentCard from "./components/featurs/payment/PaymentCard/PaymentCard"
import AdminEditor from "./components/pages/AdminEditor/AdminDataEdit.jsx"
import HomePage from "./components/pages/Home/homePage"
import PageNotFound from "./components/pages/PageNotFound/PageNotFound"
import SubCategory from "./components/pages/SubCategory/SubCategory"
import Login from "./components/pages/Login/Login"
import SignUp from "./components/pages/SignUp/SignUp"



const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/subCategory" element={<SubCategory />} />
            <Route path="/profileCard" element={<ProfileCard />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/payment" element={<PaymentCard/> } /> */}
            <Route path="/admin_edit_page" element={<AdminEditor/>}/>
            <Route path="*" element={<PageNotFound/> } />
        </Routes>
    )
}

export default Router;
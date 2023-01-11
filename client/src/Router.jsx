import { Route, Routes } from "react-router-dom"
import ProfileCard from "./components/featurs/lawyerProfile/ProfileCard/ProfileCard"
// import PaymentCard from "./components/featurs/payment/PaymentCard/PaymentCard"
import HomePage from "./components/pages/Home/homePage"
import PageNotFound from "./components/pages/PageNotFound/PageNotFound.test"
import SubCategory from "./components/pages/SubCategory/SubCategory"




const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/subCategory" element={<SubCategory />} />
            <Route path="/profileCard" element={<ProfileCard />} />
            {/* <Route path="/payment" element={<PaymentCard/> } /> */}
            {/* <Route path="/" element={ } /> */}
            <Route path="/*" element={<PageNotFound/> } />
        </Routes>
    )
}

export default Router;
import { Route, Routes } from "react-router-dom"
import ProfileCard from "./components/featurs/lawyerProfile/ProfileCard/ProfileCard"
import HomePage from "./components/pages/Home/homePage"
import SubCategory from "./components/pages/SubCategory/SubCategory"




const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/subCategory" element={<SubCategory />} />
            <Route path="/profileCard" element={<ProfileCard />} />
            {/* <Route path="/payment" element={ } />
            <Route path="/" element={ } />
            <Route path="/" element={ } /> */}
        </Routes>
    )
}

export default Router;
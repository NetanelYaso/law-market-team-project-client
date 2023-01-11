import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userStore"
import lawyerReducer from "./lawyerStore"
import departmentReducer from "./departmentStore"

export default configureStore({
    reducer:{
        user:userReducer,
        lawyer:lawyerReducer,
        department:departmentReducer,
    }
})
import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../context/googleAuth";
import {useSelector} from "react-redux"

const ProtectedRoute = ({ children }) => {
const userDB = useSelector((state)=>state.user.user.user) 
  let {user} = useUserAuth()
  if (!user || !userDB) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;

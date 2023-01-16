import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAll} from "../../services/departmentsServices";
export default function AboutUs() {
    const dispatch = useDispatch();
    const departments = useSelector((state) => state.department.allDepartments);
    useEffect(() => {
      dispatch(getAll());
    }, []);
  return (
    <>
    <h1>"AboutUs"</h1>
    {/* <div>{departments.map((item)=>{item.name})}</div> */}
    </>
  )
}

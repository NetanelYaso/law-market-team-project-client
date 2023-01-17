import "./SearchBar.css";
import { MDBIcon, MDBInputGroup } from "mdb-react-ui-kit";
import {useSelector , useDispatch} from 'react-redux';
import {getAll}from '../../services/departmentsServices'
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

;
function SearchBar({ placeholder, extraProps }) {
  const dispatch = useDispatch();
  const departments = useSelector(state=>state.department.allDepartments)
  const [departmentsArray,setDepartmentsArray] = useState(departments)
  const [searchValue, setSearchValue] = useState("");
  const [loading,setLoading] = useState();
  console.log(departments);
  
  useEffect(()=>{
    dispatch(getAll())
  },[])

  useEffect(() => {
    setDepartmentsArray(departments)
  }, [departments]);

  const handleSearch = (value) => {
    setDepartmentsArray(
      departments?.filter((department) =>
      department.name.toLowerCase().includes(value.toLowerCase())
      )
    );
    
  };
  const handleFunction = (page)=>{
    

  }


  return (
    <>
      <MDBInputGroup
        className={`w-75 bg-light ${extraProps ? extraProps : ""}`}
        textAfter={<MDBIcon fas icon="search" />}
      >
        <input
          className="form-control text-end"
          type="search"
          value={searchValue}
          placeholder="search for a department"
          onChange={(e)=>{
            setSearchValue(e.target.value)
            handleSearch(e.target.value)
          }}
        />
        <br />

        {searchValue.length > 0?(
        <div className="list-group list-group-light">
          {departmentsArray?.map((depart)=>{
            return (
              <span key={depart.name} onClick={()=>{}} className="list-group-item ">{depart.name}</span>
            )
          })}

        </div>):null}
        
      
   
      </MDBInputGroup>
    </>
  );
}

export default SearchBar;

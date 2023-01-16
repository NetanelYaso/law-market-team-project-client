import "./SearchBar.css";
import { MDBIcon, MDBInputGroup } from "mdb-react-ui-kit";
import {useSelector , useDispatch} from 'react-redux';
import {getAll} from '../../services/departmentsServices';
import { useEffect } from "react";
import { useState } from "react";

;
function SearchBar({ placeholder, extraProps }) {
  const dispatch = useDispatch();
  const department = useSelector(state=>state.department.AllDepartments)
  const [departmentsArray,setDepartmentsArray] = useState(department)
  const [searchValue, setSearchValue] = useState("");

  
  useEffect(()=>{
    dispatch(getAll())
  },[])

  useEffect(() => {
    setDepartmentsArray(department)
  }, [department]);

  const handleSearch = (value) => {
    setDepartmentsArray(
      department.filter((department) =>
      department.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

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
      </MDBInputGroup>
    </>
  );
}

export default SearchBar;

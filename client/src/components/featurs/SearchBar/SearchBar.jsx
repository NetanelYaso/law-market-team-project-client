import "./SearchBar.css";
import { MDBIcon, MDBInputGroup } from "mdb-react-ui-kit";
import {useSelector , useDispatch} from 'react-redux';
import {getAll}from '../../services/departmentsServices'
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {setIndexForSub} from "../../../store/departmentStore"

;
function SearchBar({ placeholder, extraProps }) {
  const dispatch = useDispatch();
  const [indexArray,setIndexArray]=useState([])
  const departments = useSelector(state=>state.department.allDepartments)
  const [departmentsArray,setDepartmentsArray] = useState(departments)
  const [searchValue, setSearchValue] = useState("");
  const [loading,setLoading] = useState();
  const navigate=useNavigate()
  // console.log(departments);
  console.log(indexArray);
  useEffect(()=>{
    dispatch(getAll())
  },[])

  // useEffect(() => {
  //   setDepartmentsArray(departments)
  // }, [departments]);

  const handleSearch = (value) => {
    let arr=[]
    setIndexArray(arr)
    console.log(indexArray);
    setDepartmentsArray(
      departments?.filter((department,index) =>{
        arr.push(index)
        setIndexArray(arr)
      return department.name.toLowerCase().includes(value.toLowerCase())}
      )
    );
    
  };
  const handleFunction = event=>{
    dispatch(setIndexForSub(indexArray[parseInt(event.currentTarget.id)]))
    return navigate('/subCategory')

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
        <div className="list-group w-100 text-center d-flex flex-direction-column list-group-light">
          {departmentsArray?.map((depart,index)=>{
            return (
              <span key={depart.name} id={index} onClick={handleFunction} className="list-group-item w-100">{depart.name}</span>
            )
          })}

        </div>):null}
        
      
   
      </MDBInputGroup>
    </>
  );
}

export default SearchBar;

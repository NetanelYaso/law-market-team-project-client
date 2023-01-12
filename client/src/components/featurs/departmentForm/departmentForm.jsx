import "./departmentForm.css";
import React, { useState } from "react";
import {
  MDBTextArea,
  MDBContainer,
  MDBInput,
  MDBFile,
  MDBSwitch,
  MDBBtn,
} from "mdb-react-ui-kit";
import { create } from "../../services/departmentsServices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function DepartmentForm() {
  
  const [coverImage, setCoverImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [subDepartments, setSubDepartments] = useState([]);
  const [lawyers, setLawyers] = useState([]);
  const [active, setActive] = useState(true);
  // const [loading, setLoading]= useState(false)

  let loading=useSelector((state)=>state.department.value)
  const dispatch= useDispatch()

  // useEffect(()=>{
  //   console.log(loading);
  // },[loading])

  const department = {
    name: name,
    coverImage: coverImage,
    subDepartments: { name: subDepartments, description: description },
    active: active,
    // lawyers: lawyers,
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
    } else {
      setCoverImage("");
    }

  };

  return (
    <div className="department-form">
      <MDBContainer className="w-75">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(create(department));
          }}
        >
          <MDBInput
            label="Depsrtment name"
            id="typeText"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <MDBFile
            label="cover pic"
            id="customFile"
            onChange={(e) => TransformFileData(e.target.files[0])}
          />
          <MDBSwitch
            defaultChecked
            id="flexSwitchCheckChecked"
            label=" does the department is active or not?"
            onChange={(e) => setActive(!active)}
          />
          <MDBInput
            label="sub category"
            id="typeText"
            className="subDepartments"
            type="text"
            onChange={
              (e) => (setSubDepartments(e.target.value))
              // (e) => (subDepartments[0] = e.target.value)
              // setSubDepartments([...subDepartments, e.target.value])
            }
          />
          <MDBTextArea
            label="description for sub catrgory"
            id="textAreaExample"
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
          />
          <MDBBtn>UPLOAD</MDBBtn>
        </form>
      </MDBContainer>
    </div>
  );
}

export default DepartmentForm;

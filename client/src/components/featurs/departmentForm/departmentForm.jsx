import "./departmentForm.css";
import React,{useState} from "react";
import {
  MDBContainer,
  MDBInput,
  MDBFile,
  MDBSwitch,
  MDBBtn,
} from "mdb-react-ui-kit";
import { create } from "../../services/departmentsServices";

function DepartmentForm() {

  const [coverImage, setCoverImage] = useState("");
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [lawyers, setLawyers] = useState([]);
  const [active, setActive] = useState(true);

  const department = {
    name: name,
    coverImage: coverImage,
    categories: categories,
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
            e.preventDefault()
            create(department);
          }}
        >
          <MDBInput
            label="Depsrtment name"
            id="typeText"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <MDBInput
            label="sub category"
            id="typeText"
            className="categories"
            type="text"
            onChange={(e) => setCategories([...categories, e.target.value])}
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
          <MDBBtn>UPLOAD</MDBBtn>
        </form>
      </MDBContainer>
      </div>
  );
};

export default DepartmentForm;

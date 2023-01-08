import "./lawyerForm.css";
import React,{useState} from "react";
import {
  MDBContainer,
  MDBInput,
  MDBFile,
  MDBBtn,
} from "mdb-react-ui-kit";
import { create } from "../../services/lawyersServices";

function LawyerForm() {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [departments, setDepartments] = useState([]);

  const lawyer = {
    name: name,
    avatar: avatar,
    experience: experience,
    phone: phone,
    email: email,
    departments: departments,
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
    } else {
      setAvatar("");
    }
  };

  return (
    <div className="department-form">
      <MDBContainer className="w-75">
        <form
          onSubmit={() => {
            create(lawyer);
          }}
        >
          <MDBInput
            label="lawyer name"
            id="typeText"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <MDBInput
            label="Email"
            id="typeEmail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput
            label="Phone number"
            id="typePhone"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
          />
          <MDBInput
            label="how many years of experience"
            id="typeText"
            type="text"
            onChange={(e) => setExperience(e.target.value)}
          />
          <MDBFile
            label="profile picture"
            id="customFile"
            onChange={(e) => TransformFileData(e.target.files[0])}
          />
          <MDBBtn>UPLOAD</MDBBtn>
        </form>
      </MDBContainer>
    </div>
  );
}

export default LawyerForm;

import "./LawyerCard.css";
import React from "react";
import {
MDBContainer,
MDBCardImage,
MDBRow,
MDBCol

} from 'mdb-react-ui-kit';


const LawyerCard = ()=> {
  return (
    <div className="lawyer-card">
      <MDBContainer className=' d-flex justify-content-center text-center'>
        <MDBRow>
        <MDBCol md="4">
      <MDBCardImage className='rounded-circle' width='150' height='150' src="https://i.pinimg.com/originals/b7/49/47/b74947543e3a30e0b6b2522033d0562b.jpg" alt="" />
      </MDBCol>
      <MDBCol className="" height="" md="8">
      <h5 className=" fs-4">jasmine dina</h5>
      <span>Lawyer on prenuptial agreements</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia alias, mollitia porro nihil soluta facere cum explicabo, accusantium, est ullam aspernatur totam delectus illo beatae consectetur? Quisquam, quo beatae.</p>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default LawyerCard;

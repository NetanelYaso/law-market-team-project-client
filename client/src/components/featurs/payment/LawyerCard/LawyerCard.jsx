import "./LawyerCard.css";
import React from "react";
import {
MDBContainer,
MDBCardImage

} from 'mdb-react-ui-kit';


const LawyerCard = ()=> {
  return (
    <div className="lawyer-card">
      <MDBContainer className=' d-flex justify-content-center'>
      <MDBCardImage className='rounded-circle' width='100' src="https://i.pinimg.com/originals/b7/49/47/b74947543e3a30e0b6b2522033d0562b.jpg" alt="" />
      <h5>full name</h5>
      <span>somthing on here</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia alias, mollitia porro nihil soluta facere cum explicabo, accusantium, est ullam aspernatur totam delectus illo beatae consectetur? Quisquam, quo beatae.</p>
      </MDBContainer>
    </div>
  );
};

export default LawyerCard;

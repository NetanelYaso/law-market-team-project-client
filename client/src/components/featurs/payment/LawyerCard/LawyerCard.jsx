import "./LawyerCard.css";
import React from "react";
import {
MDBContainer,
MDBCardImage,
MDBRow,
MDBCol,
MDBListGroup,
MDBListGroupItem,
MDBIcon
} from 'mdb-react-ui-kit';


const LawyerCard = ()=> {
  return (
    <div className="lawyer-card square border border-3 mb-4">
      <MDBContainer className=' d-flex justify-content-center text-center '>
        <MDBRow>
        <MDBCol md="4" className="">
      <MDBCardImage className='rounded-circle' width='140' height='140' src="https://i.pinimg.com/originals/b7/49/47/b74947543e3a30e0b6b2522033d0562b.jpg" alt="" />
      </MDBCol>
      <MDBCol className="text-lg-end" height="" md="8">
      <h5 className=" fs-4">דינה יסמין</h5>
      <span className="">עורך דין בנושא הסכמי ממון</span>
      <p className="">הסכם ממון הינו הסכם בענייני רכוש, בין בני זוג נשואים, לא נשואים (ידועים בציבור) או בני זוג העומדים להינשא, בו מוסדרים ביניהם כל ענייני הרכוש והממון, בהתאם להעדפותיהם האישיות..</p>
      </MDBCol>
      <MDBCol>
      <MDBListGroup style={{ minWidth: '18rem' }} light className=" pe-sm-0 text-lg-end text-md-end ps-5">
      <MDBListGroupItem noBorders className="me-5">פיצוי פיטורין</MDBListGroupItem>
      <MDBListGroupItem noBorders className="me-5">דמי תברואה </MDBListGroupItem>
        </MDBListGroup>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default LawyerCard;

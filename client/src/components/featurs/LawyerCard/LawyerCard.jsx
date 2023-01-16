import "./LawyerCard.css";
import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCardFooter,
  MDBIcon,
} from "mdb-react-ui-kit";
import Rating from "../Rating/Rating";

function LawyerCard({ lawyerInfo }) {
  const { pic, fullName, department, rating } = lawyerInfo;
  return (
    <>
      <MDBCard border="warning hover-shadow">
        <MDBCardImage src={pic} alt="..." position="top" />
        <MDBCardBody>
          <Rating ratingNum={rating} />
          <MDBCardTitle className="text-center mb-0 fs-4">
            {fullName}
          </MDBCardTitle>
          <MDBCardText className="text-center">{department}</MDBCardText>
        </MDBCardBody>
        <MDBCardFooter className="px-1">
          <p className="m-0 text-center fs-5">Provided by</p>
          <MDBCardText className="text-center text-muted" color="dark">
            LawMarket
            <MDBIcon color="warning" size="xs" fas icon="gavel" />
          </MDBCardText>
        </MDBCardFooter>
      </MDBCard>
    </>
  );
}

export default LawyerCard;

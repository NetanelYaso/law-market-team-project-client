import "./MapInfoWindow.css";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
function MapInfoWindow() {
  return (
    <MDBCard className="p-3">
      <MDBCardImage
        src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
        position="top"
        alt="..."
      />
      <MDBCardBody>
        <MDBCardTitle>Lawyer Information</MDBCardTitle>
        <MDBCardText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
          quisquam quibusdam quia perferendis vitae obcaecati id fugiat maxime,
          quidem ratione. Consequuntur vero amet magnam voluptas.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}

export default MapInfoWindow;

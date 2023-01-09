import React from "react";
import "../bottom-cards/bottomCard.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBBadge,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from "mdb-react-ui-kit";

export default function BottomCard() {
  return (
    <div>
      <div><h2 className=" d-flex justify-content-center">עורכי דין שלנו</h2></div>
      <div className="d-flex row-cols-md-4 cardRaper justify-content-center ">
      <MDBCol xl={6} className="mb-4 singalCard">
        <MDBCardBody className="singalCard">
          <div className="d-flex justify-content-between align-items-center row  ">
            <div className="d-flex align-items-center col-12 ">
              <img
                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                alt=""
                style={{ width: "55px", height: "55px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">דן אברהמי</p>
                <p className="text-muted mb-0"> עו"ד בענייני תעבורה</p>
                <p className="text-muted mb-0">עלות השירות: 100$</p>
              </div>
            </div>
            <div>
              <ul>
              <li>גגגגג</li>
                <li>עעעעע</li>
                <li>חחחחח</li>
                <li>טטטטט</li>
              </ul>
            </div>
          </div>
        </MDBCardBody>
          <MDBBtn color="link" rippleColor="primary" className="text-reset m-0">
            Message <MDBIcon fas icon="envelope" />
          </MDBBtn>
        {/* <MDBCardFooter
          background="light"
          border="0"
          className="p-2 d-flex justify-content-around"
        >
        </MDBCardFooter> */}
      </MDBCol>
      <MDBCol xl={6} className="mb-4">
        <MDBCardBody className="singalCard">
          <div className="d-flex justify-content-between align-items-center row">
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                alt=""
                style={{ width: "55px", height: "55px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">סבינה בן נתן</p>
                <p className="text-muted mb-0"> עו"ד בענייני תעבורה</p>
                <p className="text-muted mb-0">עלות השירות: 100$</p>
              </div>
            </div>
            <div>
              <ul>
              <li>גגגגג</li>
                <li>עעעעע</li>
                <li>חחחחח</li>
                <li>טטטטט</li>
              </ul>
            </div>
          </div>
        </MDBCardBody>
          <MDBBtn color="link" rippleColor="primary" className="text-reset m-0">
            Message <MDBIcon fas icon="envelope" />
          </MDBBtn>
        {/* <MDBCardFooter
          background="light"
          border="0"
          className="p-2 d-flex justify-content-around"
        >
        </MDBCardFooter> */}
      </MDBCol>
      <MDBCol xl={6} className="mb-4">
        <MDBCardBody className="singalCard">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                alt=""
                style={{ width: "55px", height: "55px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">סבינה בן נתן</p>
                <p className="text-muted mb-0"> עו"ד בענייני תעבורה</p>
                <p className="text-muted mb-0">עלות השירות: 100$</p>
              </div>
            </div>
            <div>
              <ul>
                <li>גגגגג</li>
                <li>עעעעע</li>
                <li>חחחחח</li>
                <li>טטטטט</li>
              </ul>
          <MDBBtn color="link" rippleColor="primary" className="text-reset m-0">
            Message <MDBIcon fas icon="envelope" />
          </MDBBtn>
            </div>
          </div>
        </MDBCardBody>
        {/* <MDBCardFooter
          background="light"
          border="0"
          className="p-2 d-flex justify-content-around"
        >
        </MDBCardFooter> */}
      </MDBCol>
    </div>
    </div>
  );
}

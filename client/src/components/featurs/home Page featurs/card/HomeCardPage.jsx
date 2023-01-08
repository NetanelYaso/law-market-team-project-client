import "../card/HomeCardPage.css";
import { departnentArray } from "../../../../services/departments";
import React, { useState } from "react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBCard,
  MDBCardTitle,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function HomeCardPage() {
  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);
  return (
    <>
    <div className="d-flex flex-wrap: wrap;">
        {departnentArray.map((item, key) => {
          return(
            <div key={key}>
      <MDBCard  className="text-white imagStyle hover-overlay col-ms-12 col-md-4">
        <MDBCardImage
          className="imag "
          overlay
          src="https://mdbootstrap.com/img/new/slides/017.webp"
          alt="..."
        />
        <div>
          <MDBCardOverlay className="boxTitel myText ">
            <MDBCardTitle className="textInCard " onClick={toggleShow}>
              {item.name}
            </MDBCardTitle>
          </MDBCardOverlay>
        </div>
      </MDBCard>
      {/* <MDBModalTitle className=" card-for-home-page " >
      </MDBModalTitle> */}

      <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <figure className="PopUpModel">
              <div className="textInModle">{item.name}</div>
            </figure>
            <ul className="cardul">
              <li className="cardLi">{item.name}</li>
              <li className="cardLi">{item.name}</li>
              <li className="cardLi">{item.name}</li>
              <li className="cardLi">{item.name}</li>
              <li className="cardLi">{item.name}</li>
            </ul>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </div>)
        })}
    </div>
    </>
  );
}

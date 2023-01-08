import "../card/HomeCardPage.css";
import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalTitle,
  MDBModalFooter,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function HomeCardPage() {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
  return (
    <>
      <MDBCard background="dark" className="text-white imagStyle hover-overlay">
        <MDBCardImage
          className="imag "
          overlay
          src="https://mdbootstrap.com/img/new/slides/017.webp"
          alt="..."
        />
        <div>
          <MDBCardOverlay className="boxTitel myText ">
            <MDBCardTitle className="textInCard " onMouseOver={toggleShow}>
              title
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
              <div className="textInModle">Card title</div>
            </figure>
            <ul className="cardul">
              <li className="cardLi">kkkkkkkk</li>
              <li className="cardLi">nnnnnnnnnn</li>
              <li className="cardLi">bbbbbbbbbbb</li>
              <li className="cardLi">kkkkkkk</li>
              <li className="cardLi">kkkkk</li>
            </ul>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

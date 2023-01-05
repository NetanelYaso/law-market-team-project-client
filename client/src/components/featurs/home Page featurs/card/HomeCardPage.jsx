import "../card/HomeCardPage.css";
import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalTitle,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export default function HomeCardPage() {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
  return (
    <>
      <MDBModalTitle className=" card-for-home-page " onClick={toggleShow}>
        <div className="textInCard">CATEGORY</div>
      </MDBModalTitle>

      <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <figure className="PopUpModel">
              <div className="textInModle">CATEGORY</div>
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

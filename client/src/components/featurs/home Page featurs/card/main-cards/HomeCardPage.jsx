import "./HomeCardPage.css";
import { departnentArray } from "../../../../../services/departments";
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
  const [index, setIndex] = useState(0);
  const toggleShow = () => setCentredModal(!centredModal);
  const images = ["https://i.ytimg.com/vi/2hwZQvOG-NU/maxresdefault.jpg",
  'https://www.קנאביס.com/wp-content/uploads/2012/09/monkey-baby.jpg'
]

const someFunc = (key)=>{
  setIndex(key)
 return toggleShow()

}

  return (

    <div className="d-flex justify-content-center raper">
      <div className="d-flex justify-content-center col-md-8">
        {departnentArray.map((item, key) => {
          return (
            <div key={key}>
              <MDBCard className="text-white imagStyle hover-overlay align-items-center bg-red">
                <MDBCardImage
                  className="imag"
                  overlay
                  src="https://mdbootstrap.com/img/new/slides/017.webp"
                  alt="..."
                />
                <div>
                  <MDBCardOverlay className="boxTitel myText ">
                    <MDBCardTitle className="textInCard " onClick={()=>someFunc(key)}>
                      {item.name}
                    </MDBCardTitle>
                  </MDBCardOverlay>
                </div>
              </MDBCard>

            </div>
          );
        })}

<MDBModal
className="modal_popUp bg-opacity-50"
  tabIndex="-1"
  show={centredModal}
  setShow={setCentredModal}
>
  <MDBModalDialog centered>
    <MDBModalContent>
      <figure className="PopUpModel" style={{backgroundImage:`url(${images[index]})`}}>
        <div className="textInModle">{departnentArray[index].name}</div>
      </figure>
      <ul className="cardul">
        <li className="cardLi">{departnentArray[index].name}</li>
        <li className="cardLi">{departnentArray[index].name}</li>
        <li className="cardLi">{departnentArray[index].name}</li>
        <li className="cardLi">{departnentArray[index].name}</li>
        <li className="cardLi">{departnentArray[index].name}</li>
      </ul>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>
      </div>
    </div>
    
  );
}




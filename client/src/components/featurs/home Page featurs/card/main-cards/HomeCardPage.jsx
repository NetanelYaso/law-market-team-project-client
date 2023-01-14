import "./HomeCardPage.css";
import { departnentArray } from "../../../../../services/departments";
import { useState, useEffect } from "react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBCard,
  MDBCardTitle,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux"
import { getAll } from "../../../../services/departmentsServices"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

export default function HomeCardPage() {
  const [centredModal, setCentredModal] = useState(false);
  const [index, setIndex] = useState(0);
  const toggleShow = () => setCentredModal(!centredModal);
  const images = ["https://i.ytimg.com/vi/2hwZQvOG-NU/maxresdefault.jpg",
    'https://www.קנאביס.com/wp-content/uploads/2012/09/monkey-baby.jpg'
  ]
  const dispatch = useDispatch()
  const departments = useSelector(state => state.department.allDepartments);
  console.log(departments);
  useEffect(() => {
    dispatch(getAll())
  }, [])
  const popUpValue = (key) => {
    setIndex(key)
    return toggleShow()

  }

  const navigate = useNavigate()
  const linkTo = () => {
    navigate("/SubCategory")
  }

  return (
    <div className="d-flex justify-content-center raper mt-5 mb-5">
      <div className="d-flex justify-content-center col-lg-6 col-sm-4">
        {departments.map((item, key) => {
          return (
            <div key={key}>
              <MDBCard className="text-white imagStyle hover-overlay align-items-center ">
                <MDBCardImage
                  className="imag"
                  overlay
                  src={item.coverImage.url}
                  alt="..."
                />
                <div>
                  <MDBCardOverlay className="boxTitel myText " onClick={() => popUpValue(key)}>
                    <MDBCardTitle className="textInCard " >
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
              <figure className="PopUpModel" style={{ backgroundImage: `url(${images[index]})` }}>
                {/* <div className="textInModle">{departments[0].name}</div> */}
              </figure>
              <ul className="cardul">
                {/* <li className="cardLi">{departments[0].name}</li>
                <li className="cardLi">{departments[0].name}</li>
                <li className="cardLi">{departments[0].name}</li>
                <li className="cardLi">{departments[0].name}</li>
                <li className="cardLi">{departments[0].name}</li> */}
              </ul>
              <Button onClick={linkTo}>למעבר</Button>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </div>
    </div>

  );
}




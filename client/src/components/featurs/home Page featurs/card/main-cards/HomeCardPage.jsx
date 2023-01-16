import "./HomeCardPage.css";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import BottomCard from "../bottom-cards/BottomCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAll } from "../../../../services/departmentsServices";
import { useNavigate } from "react-router-dom";

function HomeCardPage() {
  const navigate = useNavigate();
  const linkTo = () => {
    navigate("/SubCategory");
  };
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.department.allDepartments);
  useEffect(() => {
    dispatch(getAll());
  }, []);

  // console.log(departments);
  return (
    <>
      <div className="d-flex justify-content-center mt-3"></div>
      <Container className="sub_category">
        <Row>
          {departments.map((item) => (
            <Col className="g-3" xl={4}>
              <Card className="mainCard card">
                <img className="homePage_card_img" src={item.coverImage.url} />
                <div class="card-img-overlay">
                  <div className=" title-bg "> <h5 class="card-title d-flex justify-content-center ">{item.name}</h5></div>
                </div>
                <div className="mainCardBody">
                  <ul>
                    {item.subDepartments.map((sub) => (
                      <li>{sub.name}</li>
                    ))}
                  </ul>
                  <Button onClick={linkTo}>עוד</Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Row></Row>
      </Container>
    </>
  );
}

export default HomeCardPage;

//  <MDBModal
// className="modal_popUp bg-opacity-50"
//   tabIndex="-1"
//   show={centredModal}
//   setShow={setCentredModal}
// >
//   <MDBModalDialog centered>
//     <MDBModalContent>
//       <figure className="PopUpModel" style={{backgroundImage:`url(${images[index]})`}}>
//          <div className="textInModle">{departments[index].name}</div>
//        </figure>
//        <ul className="cardul">
//          <li className="cardLi">{departments[index].name}</li>
//          <li className="cardLi">{departments[index].name}</li>
//          <li className="cardLi">{departments[index].name}</li>
//          <li className="cardLi">{departments[index].name}</li>
//          <li className="cardLi">{departments[index].name}</li>
//        </ul>
//      </MDBModalContent>
//    </MDBModalDialog>
//  </MDBModal>
//       </div>
//     </div>

//   );
// }

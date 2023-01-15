import "./HomeCardPage.css";
import GenericCard from "../../../GenericCard";
import { Row, Col, Container, Button } from 'react-bootstrap';
import { data } from "../../../GenericCard/data"
import BottomCard from "../bottom-cards/BottomCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getAll } from "../../../../services/departmentsServices";
import { useParams } from "react-router-dom";

function HomeCardPage() {
  const dispatch = useDispatch()
  const departments = useSelector(state => state.department.allDepartments)
  useEffect(() => {
    dispatch(getAll())
  },[])
  
  console.log(departments);
  return (
    <>
      <div className="d-flex justify-content-center mt-3">
      </div>
      <Container className="sub_category">
        <Row>
          {departments.slice(0, 9).map((item) => (
            <Col className="g-3" xl={4}>
              <GenericCard name={item.name} discription={item.discription} />
            </Col>
          ))}
        </Row> 
      </Container>
      <Container>
        <Row>
          </Row>
      </Container>
    </>
  );
};

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




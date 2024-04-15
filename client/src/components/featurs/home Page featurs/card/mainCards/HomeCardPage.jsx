
import "./HomeCardPage.css";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAll } from "../../../../services/departmentsServices";
import { useNavigate } from "react-router-dom";
import {setIndexForSub} from "../../../../../store/departmentStore"

function HomeCardPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const linkTo = event => {
    dispatch(setIndexForSub(parseInt(event.currentTarget.id)))
    navigate("/SubCategory");
  };
  const departments = useSelector((state) => state.department.allDepartments);
  useEffect(() => {
    dispatch(getAll());
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center mt-3"></div>
      <Container className="sub_category">
        <Row>
          {departments.map((item,index) => (
            <Col className="g-3" xl={4}>
              <Card className="mainCard card">
                <img className="homePage_card_img" src={item.coverImage.url} />
                <div class="card-img-overlay">
                  <div className=" title-bg ">
                    <h5 className="card-title">
                      {item.name}
                    </h5>
                  </div>
                </div>
                <div className="mainCardBody">
                  <ul>
                    {item.subDepartments.map((sub) => (
                      <li>{sub.name}</li>
                    ))}
                  </ul>
                  <Button id={index} onClick={linkTo}>עוד</Button>
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



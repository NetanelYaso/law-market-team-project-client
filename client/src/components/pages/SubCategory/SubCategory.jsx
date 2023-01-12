import "./SubCategory.css";
import GenericCard from "../../featurs/GenericCard/GenericCard";
import { Row, Col, Container,Button } from 'react-bootstrap';
import { data } from "../../featurs/GenericCard/data"
import BottomCard from "../../featurs/home Page featurs/card/bottom-cards/BottomCard";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getAll } from "../../services/departmentsServices";

function SubCategory() {
  const dispatch = useDispatch()
  const departments = useSelector(state => state.department.allDepartments)
  useEffect(() => {
    dispatch(getAll())
  })
  
  console.log(departments);
  return (
    <>
      <div className="d-flex justify-content-center mt-3">
      </div>
      <Container className="sub_category">
        <Row>
          {departments.slice(0, 6).map((item) => (
            <Col className="g-3" xl={4}>
              <GenericCard name={item.name} discription={item.discription} />
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Row>
          {/* <BottomCard /> */}
        </Row>
      </Container>
    </>
  );
};

export default SubCategory;


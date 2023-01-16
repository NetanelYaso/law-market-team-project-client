import "./SubCategory.css";
import GenericCard from "../../featurs/GenericCard/GenericCard";
import { Row, Col, Container, Button } from 'react-bootstrap';
import BottomCard from "../../featurs/home page featurs/card/bottom-cards/BottomCard";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getAll } from "../../services/departmentsServices";

function SubCategory() {
  const dispatch = useDispatch()
  const departments = useSelector(state => state.department.allDepartments)

  useEffect(() => {
    dispatch(getAll())
  }, [])
  const subDepartment = departments
  console.log(subDepartment);

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
      </div>
      <Container className="sub_category mb-5">
        <Row>
          {departments.slice(0, 6).map((item, key) => (
            <Col className="g-3" xl={4}>
              <GenericCard key={key} name={item.subDepartments[0].name} discription={item.subDepartments[0].description} />
            </Col>
          ))}
        </Row> 
      </Container>
      <Container>
        <Row>
          <BottomCard />
        </Row>
      </Container>
    </>
  );
};

export default SubCategory;


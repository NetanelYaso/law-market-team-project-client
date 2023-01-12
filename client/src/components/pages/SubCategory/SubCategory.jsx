import "./SubCategory.css";
import React from "react";
import GenericCard from "../../featurs/GenericCard/GenericCard";
import { Row, Col, Container } from 'react-bootstrap';
import { data } from "../../featurs/GenericCard/data"
import BottomCard from "../../featurs/home Page featurs/card/bottom-cards/BottomCard";

function SubCategory() {
  return (
    <>
    <div className="d-flex justify-content-center mt-3">
    </div>
      <Container className="sub_category">
        <Row>
          {data.map((item) => (
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


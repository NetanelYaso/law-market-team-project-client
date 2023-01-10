import "./SubCategory.css";
import React from "react";
import GenericCard from "../../featurs/GenericCard/GenericCard";
import { Row, Col, Container } from 'react-bootstrap';
import { data } from "../../featurs/GenericCard/data"

function SubCategory() {
  return (
    <Container className="sub-category">
      <Row>
        {data.map((item) => (
          <Col md={4}>
            <GenericCard  name={item.name} discription={item.discription}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SubCategory;


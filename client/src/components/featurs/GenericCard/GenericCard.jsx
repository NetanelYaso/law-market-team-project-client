import "./GenericCard.css";
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import { useEffect } from "react";
import { data } from "./data"
function GenericCard() {
  return (
    <Container className="generiCard_div">
      <Card className="main_card" style={{ width: '15rem', height: '10rem' }}>
        <Card.Body className="generiCard">
          <Card.Title><i className="far fa-heart"></i></Card.Title>
          <Card.Title>
            family law
          </Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default GenericCard;
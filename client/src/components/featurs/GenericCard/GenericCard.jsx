import "./GenericCard.css";
import { Card, Container } from 'react-bootstrap';
import { useState } from "react";
import { useEffect } from "react";

function GenericCard() {
  const [lawSubject, setLawSubject] = useState([]);

  useEffect(() => {
    
  }, [])

  return (
    <Container className="generiCard_div ">
      <Card style={{ width: '15rem', height: '10rem' }}>
        <Card.Body className="generiCard">
          <Card.Title><i className="far fa-heart"></i></Card.Title>
          <Card.Title className="">
            family law
          </Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default GenericCard;
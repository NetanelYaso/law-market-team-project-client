import "./GenericCard.css";
import { Card, Container } from 'react-bootstrap';

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
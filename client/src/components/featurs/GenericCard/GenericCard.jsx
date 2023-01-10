import "./GenericCard.css";
import { Card, Container } from 'react-bootstrap';

function GenericCard({ name, discription }) {
  return (
    <div className="generiCard_div">
      <Container >
        <Card className="first_card" style={{ width: '15rem', height: '10rem' }}>
          <Card.Body className="generiCard">
            {/* <Card.Title></Card.Title> */}
            <Card.Title>
              {name}
              <ul>
                <li>{discription[0]}</li>
                <li>{discription[1]}</li>
                <li>{discription[2]}</li>
              </ul>
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
      <Container >
        <Card className="second_card" style={{ width: '15rem', height: '10rem' }}>
          <Card.Body className="generiCard">
            <Card.Title><i className="far fa-heart"></i></Card.Title>
            <Card.Title>
              {name}
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default GenericCard;
import "./GenericCard.css";
import { Card, Container } from 'react-bootstrap';

function GenericCard({ name, discription }) {

  

  return (
    <div className="generiCard_div">
        <Card className="first_card" style={{ width: '15rem', height: '10rem',zIndex:-1 }}>
          <Card.Body className="genericCard">
            {/* <Card.Title></Card.Title> */}
            <Card.Title>
              {name}
            </Card.Title>
            <Card.Text>
              <ul>
                <li>{discription[0]}</li>
                <li>{discription[1]}</li>
                <li>{discription[2]}</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        {/* <Card className="second_card" style={{ width: '15rem', height: '10rem' }} >
          <Card.Body className="genericCard">
            <Card.Title><i className="far fa-heart"></i></Card.Title>
            <Card.Title>
              {name}
            </Card.Title>
          </Card.Body>
        </Card> */}
    </div>
  );
}

export default GenericCard;
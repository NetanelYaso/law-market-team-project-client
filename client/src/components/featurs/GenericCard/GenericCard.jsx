import "./GenericCard.css";
import { Card, Button } from 'react-bootstrap';

function GenericCard() {
  return (
    <Card className="mainCard">
      <div>
        <h1>Hello</h1>
      </div>
      <div className="mainCardBody">
        <p>Text Text Text Text</p>
        <Button>Click Here</Button>
      </div>
    </Card>

  );
}

export default GenericCard;



import "./GenericCard.css";
import { Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"
function GenericCard({ name, discription }) {
  const navigate = useNavigate()
  const navigateTo = () => {
    navigate("/login")
  }
  return (
    <Card className="mainCard">
      <div>
        <h1>{name}</h1>
      </div>
      <div className="mainCardBody">
        <p>{discription}</p>
        <Button onClick={navigateTo}>עוד</Button>
      </div>
    </Card>

  );
}

export default GenericCard;



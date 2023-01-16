import "./GenericCard.css";
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
function GenericCard({ name, discription }) {
  const navigate = useNavigate()
  const linkTo = () => {
    navigate("/profileCard")
  }
  return (
    <Card className="mainCard">
      <div>
        <h1>{name}</h1>
      </div>
      <div className="mainCardBody">
        <p>{discription}</p>
        <Button onClick={linkTo}>עוד</Button>
      </div>
    </Card>

  );
}

export default GenericCard;



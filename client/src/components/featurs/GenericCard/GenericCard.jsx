import "./GenericCard.css";
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
function GenericCard({name,discription}) {
  const navigate = () => {
    <Link to={"/lawyersCards"}></Link>
  }
  return (
    <Card className="mainCard">
      <div>
        <h1>{name}</h1>
      </div>
      <div className="mainCardBody">
        <p>{discription}</p>
        <Button onClick={()=>navigate}>עוד</Button>
      </div>
    </Card>

  );
}

export default GenericCard;



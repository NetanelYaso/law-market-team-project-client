import "./GenericCard.css";
import { Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"
import { getAll } from "../../services/departmentsServices";
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
function GenericCard({ name, discription }) {
  const navigate = useNavigate()
  const navigateTo = () => {
    navigate("/login")
  }
  const dispatch = useDispatch()
  const departments = useSelector(state => state.department.allDepartments)
  useEffect(() => {
    dispatch(getAll())
  },[])
  return (
    <Card className="mainCard">
      <div>
        <h1>{name}</h1>
      </div>
      <div className="mainCardBody">
        <p>{`${departments[0].subDepartments[0].name}`}</p>
        <Button onClick={navigateTo}>עוד</Button>
      </div>
    </Card>

  );
}

export default GenericCard;



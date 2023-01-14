import "./Explanation.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom"

const navigate = () => {
    <Link to={"/lawyersCards"}></Link>
  }

function Explanation() {
  return (
    <>


      <Row  >
        <Col md={6} className=" p-0">
          <img
            className="gif"
            src={
              "https://avantaco.com/upload-img/Over_all/over-all-services.gif"
            }
          />
        
        </Col>
        <Col md={6} className=" p-0">
          <div className="description    ">
            <div className="d-flex  justify-content-center align-content-center  ss"> <h2> ליווי משפטי מקצועי- Law market 
            </h2>
            <span>
            חברתנו עוסקת במתן ליווי משפטי מהימן מקצועי ומוכח בשלל תחומים </span>
              <span> זקוקים לסיוע משפטי ? נדאג לספק לכם אותו בצורה הנוחה ביותר </span>
            <div>
            <Button onClick={()=>navigate} className ="me-3 bg-">עורכי הדין שלנו </Button>
            <Button onClick={()=>navigate}>לקוחות מספרים</Button></div>
          </div></div>
        </Col>
      </Row>
    </>
  );
}

export default Explanation;

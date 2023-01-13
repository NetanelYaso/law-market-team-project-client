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
          <div className="description p-5 h-100 w-100 cl">
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing, atque.
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magni, incidunt quo nihil illum, corporis officia quidem nemo dolor asperiores esse inventore hic fuga suscipit eum saepe nostrum. Quos, alias.</p>
            <Button onClick={()=>navigate} className ="me-3 bg-">עורכי הדין שלנו </Button>
            <Button onClick={()=>navigate}>לקוחות מספרים</Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Explanation;

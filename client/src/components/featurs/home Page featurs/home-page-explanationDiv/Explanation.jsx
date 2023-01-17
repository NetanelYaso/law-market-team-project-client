import "./Explanation.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import{useNavigate} from "react-router-dom"

function Explanation() {
  const navigate = useNavigate()
  return (
    <>
      <Row>
        <Col md={6} className="gif p-0">
          <div className="background_img"></div>
          <img
            className="explain_img"
            src={
              "https://www.sas.com/en_gb/industry/government/intelligent-investigations-management/_jcr_content/par/styledcontainer_copy/par/image.img.png/1637600122303.png"
            }
          />
        </Col>
        <Col md={6} className="p-0 mb-4 mt-4">
          <div className="description">
            <div className="explanation">
              <h1>Law market</h1>
              <h4>ליווי משפטי מקצועי</h4>
              <h6>
                חברתנו עוסקת במתן ליווי משפטי מהימן מקצועי ומוכח בשלל תחומים
              </h6>
              <h6>
                זקוקים לסיוע משפטי ? נדאג לספק לכם אותו בצורה הנוחה ביותר
              </h6>
      
              <div className="explanation_btn mt-5">
                <button className="navigateBtn me-3 mb-3 btn btn-outline-info" onClick={() => navigate("/LawyersSelection")}>עורכי הדין שלנו </button>
                <button className="navigateBtn me-3 mb-3 btn btn-outline-info" onClick={() => navigate("/Rating")}>לקוחות מספרים</button></div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Explanation;

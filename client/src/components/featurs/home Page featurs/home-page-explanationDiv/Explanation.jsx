import React from "react";
import { Col, Row } from "react-bootstrap";
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

import "./Explanation.css";
function Explanation() {
  return (
    <>


      <Row  >
        <Col md={6} className=" p-0">
          <div className="description p-5 h-100 w-100 cl">
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing, atque.
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magni, incidunt quo nihil illum, corporis officia quidem nemo dolor asperiores esse inventore hic fuga suscipit eum saepe nostrum. Quos, alias.</p>
          </div>
        </Col>
        <Col md={6} className=" p-0">
          <img
            className="gif"
            src={
              "https://avantaco.com/upload-img/Over_all/over-all-services.gif"
            }
          />
        </Col>
      </Row>
    </>
  );
}

export default Explanation;

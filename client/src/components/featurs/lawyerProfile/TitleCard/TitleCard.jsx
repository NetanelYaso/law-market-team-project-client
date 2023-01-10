import React from "react";
import "./TitleCard.css";

const TitleCard = () => {
  return (
    <div className="container">
      <div className="row g-2 mb-3 ">
        <div className=" cardCol col col-md-6 col-sm-6">
          <div className="lawyerCard">
            <h1>hello</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>

        <div className="col col-md-6 col-sm-6">
          <div className="lawyerCard">
            <h1>hello</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

          </div>
        </div>

        <div className="col col-md-6 col-sm-6">
          <div className="lawyerCard">
            <h1>hello</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

          </div>
        </div>

        <div className="col col-md-6 col-sm-6">
          <div className="lawyerCard">
            <h1>hello</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

          </div>
        </div>
      </div>
      <div className="row">
        <div className="colComments border-bottom border-top">
          <h5>some name <i class="fa-star fa-sm text-warning far"></i></h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non
            quos corrupti ipsam delectus.
          <br />  <span className="text-muted">few days ago</span>
          </p>
        </div>
        <div className="colComments border-bottom border-top">
          <h5>some name <i class="fa-star fa-sm text-warning far"></i></h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non
            quos corrupti ipsam delectus.
          <br />  <span className="text-muted">few days ago</span>
          </p>
        </div>
        <div className="colComments border-bottom border-top">
          <h5>some name <i class="fa-star fa-sm text-warning far"></i></h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non
            quos corrupti ipsam delectus.
          <br />  <span className="text-muted">few days ago</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;

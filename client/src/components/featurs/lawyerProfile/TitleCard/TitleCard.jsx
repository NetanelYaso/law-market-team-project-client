import React from "react";
import "./TitleCard.css";
import { data } from "../../GenericCard/data";
import GenericCard from "../../GenericCard/GenericCard";
const TitleCard = () => {
  // console.log(data);
  return (
    <div className="container">
      <div className="row g-2 mb-3 ">
        <h4 className="justify-self-end text-left">נושאים בהם עו''ד ... מתמצאת</h4>
        {data.slice(0, 4).map((item) => (
          <div className="cardCol col col-md-6 col-sm-6 ">
            <GenericCard name={item.name} />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="colComments border-bottom border-top">
          <h5>
            דניאל גדמו <i class="fa-star fa-sm text-warning far"></i>
          </h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Distinctio, consequatur exercitationem mollitia,
            
            <br /> <span className="text-muted">few days ago</span>
          </p>
        </div>
        <div className="colComments border-bottom border-top">
          <h5>
            some name <i class="fa-star fa-sm text-warning far"></i>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non
            quos corrupti ipsam delectus.
            <br /> <span className="text-muted">few days ago</span>
          </p>
        </div>
        <div className="colComments border-bottom border-top">
          <h5>
            some name <i class="fa-star fa-sm text-warning far"></i>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non
            quos corrupti ipsam delectus.
            <br /> <span className="text-muted">few days ago</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;

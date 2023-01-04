import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { Container } from "@mui/system";
import "../ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img src="https://i0.wp.com/alawyerandhermoney.com/wp-content/uploads/2019/09/pexels-photo-2381069.jpeg?fit=1024%2C682&ssl=1" height='100px' width="100px" alt="" />
        </div>
      </div>
      <div className="lower-container">
        <h3>Full Name<span>Title</span></h3>
        <h4>rating</h4>
        <hr />
        <ul>
          <li>נדלן</li>
          <li>תביעות ביטוח לאומי</li>
          <li>פיצויים</li>
        </ul>
      <hr />
      <div className="details-list">
        <span>מאיפה</span>
        <span>כ</span>
      </div>
      <div className="details-list">
        <span>מאיפה</span>
        <span>כ</span>
      </div>
      <div className="details-list">
        <span>מאיפה</span>
        <span>כ</span>
      </div>
      <div className="details-list">
        <span>מאיפה</span>
        <span>כ</span>
      </div>
      <hr />
      <div className="butten-container">
        <div>butten1</div>
        <div>butten2</div>
      </div>

      </div>
     
    </div>

  );
};

export default ProfileCard;

{/* <div className="container">
<div className="ProfileCard">
  <div className="ProfileImgs">
   
      <img
        src="https://www.bestdegreeprograms.org/wp-content/uploads/2020/05/The-Top-10-Best-Degrees-for-Future-Lawyers.jpg"
        alt=""
      />
    

    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIrmDWU6ikK0U7Z-33kWmj9Ucu3fAyn6xIw&usqp=CAU"
      alt=""
    />
    <span>שם מלא</span>
    <span>תפקיד</span>
  </div>
  <div className="profileText">
    <hr />
    <div>
      <div className="vl"></div>
      <div className="rating">
        <span>rating</span>
        <span>5.5</span>
      </div>
      <div className="vl"></div>

    </div>
    <hr />
  </div>
</div>
</div> */}
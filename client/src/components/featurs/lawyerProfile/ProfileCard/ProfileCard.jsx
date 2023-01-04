import "../ProfileCard.css";
import React from "react";
const ProfileCard = () => {
  return (
    <div className="Card">
    <div className="upper-container">
      <div className="image-container">
        <img
          src="https://i0.wp.com/alawyerandhermoney.com/wp-content/uploads/2019/09/pexels-photo-2381069.jpeg?fit=1024%2C682&ssl=1"
          height="100px"
          width="100px"
          alt=""
        />
      </div>
    </div>
    <div className="lower-container">
      <h3>
        Full Name<span>Title</span>
      </h3>
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



{/* <div class="card">
<div>

<img className="profilePic" src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"  height='30px' class="card-img-top" alt="Fissure in Sandstone"/>
<img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"  height='100px' class="card-img-top" alt="Fissure in Sandstone"/>
</div>
<div class="card-body">
<p>
<h3 class="card-title">שם מלא</h3>
<h3 class="card-title">תפקיד</h3>
</p>
<hr />
<p>
<li>פיצויים</li>
<li>נדלן</li>
<li>גירושים</li>
</p>
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#!" class="btn btn-primary">Button</a>
</div>
</div> */}

import '../ProfileCard.css'
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
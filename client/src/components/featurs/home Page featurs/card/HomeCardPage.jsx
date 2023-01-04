import * as React from "react";
import "../card/HomeCardPage.css";

export default function HomeCardPage() {
  return (
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardActionArea className='card-for-home-page'>
    //     <CardMedia
    //       height="200"
    //     />
    //     <div className='textInCard'>CATEGORY</div>
    //   </CardActionArea>
    //   <CardActions>
    //   </CardActions>
    // </Card>
    <container className = "cardsContainer">
    <div className="card-for-home-page">
      <div className="textInCard"> CATEGORY</div>
    </div>
    </container>
  );
}

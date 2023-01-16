import "./Rating.css";
import { useState } from "react";
import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import { useEffect } from "react";
function Rating({ ratingNum }) {
  const starsOrder = [];
  starsOrder.push(createStarArr(Math.floor(ratingNum)));
  if (ratingNum - Math.floor(ratingNum) !== 0)
    createStarArr(starsOrder.push(1));
  else starsOrder.push(createStarArr(0));
  starsOrder.push(
    createStarArr(5 - starsOrder[0].length - starsOrder[1].length)
  );
  function createStarArr(num) {
    let tempArr = [];
    for (let i = 0; i < num; i++) {
      tempArr.push("star");
    }
    return tempArr;
  }

  return (
    <>
      <MDBContainer className="raiting_color d-flex justify-content-center pb-3">
        {starsOrder[0].map((star) => (
          <MDBIcon fas icon="star" />
        ))}
        {starsOrder[1].map((star) => (
          <MDBIcon fas icon="star-half" />
        ))}
        {starsOrder[2].map((star) => (
          <MDBIcon far icon="star" />
        ))}
      </MDBContainer>
    </>
  );
}

export default Rating;

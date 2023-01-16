import React, { useEffect } from "react";
import "./BottomCard.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBBadge,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,MDBCardImage,
} from "mdb-react-ui-kit";
import { getAll } from "../../../../services/lawyersServices";
import { useDispatch, useSelector } from "react-redux";

export default function BottomCard() {
  const dispatch = useDispatch();
  const lawyers = useSelector((state) => state.lawyer.allLawyers);
  useEffect(() => {
    dispatch(getAll());
  }, []);

  // console.log(lawyers);
  return (
    <div>
      <div className="mt-4">
        <h2 className=" d-flex justify-content-center">מומלצי החודש</h2>
      </div>
      <div className="cardRaper d-flex justify-content-evenly ">


        {lawyers.slice(0,3).map((item) => (
          <MDBCol xl={4} md={4} className="mb-4 singalCard justify-content-center ">
            <MDBCard className="singalCard d-flex justify-content-between p-5 m-2 h-100">
              <div className="d-flex justify-content-between align-items-center row  ">
                <div className="d-flex align-items-center col-12 ">
                   <MDBCardImage
                    className="rounded-circle"
                    src={ item.avatar.url}
                    alt=""
                    style={{ width: "55px", height: "55px" }}
                  />
                  <div className="ms-3">
                    <h3>עו"ד {item.name}</h3>
                    <p className="fw-bold mb-1">{item.className}</p>
                    <p className="text-muted mb-0"> {item.departments}</p>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>עלות השירות: 100$</li>
                    <li>{item.location}</li>
                    <li>{item.phone}</li>
                    <li>{item.responseTime}</li>
                    <li>{item.experience}</li>
                  </ul>
                </div>
            <MDBBtn
              color="link"
              rippleColor="primary"
              className="text-reset m-0"
             >
              Message <MDBIcon fas icon="envelope" />
            </MDBBtn>
              </div>
            </MDBCard>
          </MDBCol>
        ))}
      </div>
    </div>
  );
}

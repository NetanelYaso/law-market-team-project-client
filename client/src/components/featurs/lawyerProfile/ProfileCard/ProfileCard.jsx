import "./ProfileCard.css";
import { useEffect } from "react";
import {
  MDBContainer,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../services/departmentsServices";
import GenericCard from "../../../featurs/GenericCard/GenericCard";
import {getAll as getLawyers} from "../../../services/lawyersServices.js"
import { useNavigate } from "react-router-dom";
import Map from "../../Map/Map";


function ProfileCard() {
  const lawyerInfo=useSelector((state)=>state.lawyer.chosenLawyerIndex)
  const navigate = useNavigate();
  console.log(lawyerInfo);
  const linkTo = () => {
    navigate("/payment");
  }
  const contactUs = ()=>{
    navigate("/contactUs")
  }
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.department.allDepartments);

  // const Lawyers = useSelector(state => state.lawyer.allLawyers)
  // useEffect(() => {
  //   dispatch(getLawyers());
  // }, [])


  useEffect(() => {
    dispatch(getAll());
  }, []);
  const subDepartment = departments;



  
  return (
    <div className="profile-card mt-4">
      {/* {lawyerInfo.slice(0,1).map((item,key)=>( */}
      <MDBContainer>
        <MDBRow>
          <MDBCol className=" " md="4">
            <img
              className="img-details w-100 rounded"
              height="200"
              src="sign.jpg"
              alt="..."
            />
            
            <MDBRow>
              <MDBCol md="4" className="text-center position-relative">
                <MDBCol className="col-6">
                <MDBCardImage
                //  key={key}
                  className="rounded-circle position-absolute img-circle "
                  width="120"
                  height="120"
                  src={lawyerInfo?.avatar?.url}
                  alt=""
                />
                </MDBCol>
                <MDBCol className="col-6">
                <h5  className=" fs-4 w-100 position-absolute lawyerName text-white">{lawyerInfo.name}</h5>
                </MDBCol>
              </MDBCol>
              <MDBCol className="text-lg-end text-center " height="" md="8">
                <p className=" fw-bold">עורך דין בנושא הסכמי ממון</p>
                {/* <Rating/> */}
                <p className="">
                  הסכם ממון הינו הסכם בענייני רכוש, בין בני זוג נשואים, לא
                  נשואים (ידועים בציבור) או בני זוג העומדים להינשא, בו מוסדרים
                  ביניהם כל ענייני הרכוש והממון, בהתאם להעדפותיהם האישיות..
                </p>
              </MDBCol>
              <MDBCol>
                <MDBListGroup
                  style={{ minWidth: "18rem" }}
                  light
                  className=" pe-sm-0 text-lg-end text-md-end ps-5 p-0"
                >
                  <MDBListGroupItem noBorders className="me-5 py-2">
                    פיצוי פיטורין
                  </MDBListGroupItem>
                  <MDBListGroupItem noBorders className="me-5 py-2">
                    דמי תברואה{" "}
                  </MDBListGroupItem>
                  <MDBListGroupItem noBorders className="me-5 py-2">
                    דמי תברואה{" "}
                  </MDBListGroupItem>
                  <MDBListGroupItem noBorders className="me-5 py-2">
                    דמי תברואה{" "}
                  </MDBListGroupItem>
                </MDBListGroup>
                <MDBRow className=" m-2">
                  <MDBCol md="7" className="col-6">
                    <MDBCol className="col-12 m-2">
                      <MDBIcon fas icon="map-marker-alt" /> מאיפה
                    </MDBCol>
                    <MDBCol className="col-12 m-2">
                      <MDBIcon fas icon="award" /> ניסיון בתחום
                    </MDBCol>
                    <MDBCol className="col-12 m-2">
                      <MDBIcon far icon="comment-dots" /> זמן תגובה ממוצע
                    </MDBCol>
                    <MDBCol className="col-12 m-2">
                      <MDBIcon far icon="calendar-check" /> עבודה מוכנה תוך זמן
                    </MDBCol>
                  </MDBCol>
                  <MDBCol className=" col-6" md="5">
                    <p className="m-2">{lawyerInfo.location}</p>
                    <p className="m-2">{lawyerInfo.experience}</p>
                    <p className="m-2">{lawyerInfo.responseTime}</p>
                    <p className="m-2">{lawyerInfo.workTime}</p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mx-auto">
                <MDBCol className=" col-6" md="6">
                <MDBBtn className="btn-contact w-100" onClick={contactUs}>צור קשר</MDBBtn>
                </MDBCol>
                <MDBCol className=" col-6" md="6">
                <MDBBtn className="btn-contact2  w-100" onClick={linkTo}>לקבלת הצעה </MDBBtn>
                </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol className=" " md="8">
            <MDBRow>
              {lawyerInfo?.departments?.map((item, key) => (
                <MDBCol className="col-lg-5 m-2 p-0 col-12 genericCard">
                  <GenericCard
                    className=""
                    key={key}
                    name={item.name}
                  />
                </MDBCol>
              ))}
            </MDBRow>
            {
              lawyerInfo?.reviews?.map((item, key) =>(
                <MDBCol className="aa fw-bolder m-4 p-3">
                  <h5>{item.name}</h5>
                  <p> {item.coment}</p>
                </MDBCol>
              ))
            }
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-5">
         {/* <Map address={lawyerInfo.location} /> */}
        </MDBRow>
      </MDBContainer>
       {/* ))} */}
    </div>
  );
}

export default ProfileCard;

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
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../services/departmentsServices";
import GenericCard from "../../../featurs/GenericCard/GenericCard";
import {getAll as a} from "../../../services/lawyersServices.js"
function ProfileCard() {
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.department.allDepartments);

  const Lawyers = useSelector(state => state.lawyer.allLawyers)
  useEffect(() => {
    dispatch(a());
  }, [])
console.log(Lawyers);
  useEffect(() => {
    dispatch(getAll());
  }, []);
  const subDepartment = departments;
  console.log(subDepartment);


  
  return (
    <div className="profile-card mt-4">
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
                  className="rounded-circle position-absolute img-circle "
                  width="120"
                  height="120"
                  src="https://i.pinimg.com/originals/b7/49/47/b74947543e3a30e0b6b2522033d0562b.jpg"
                  alt=""
                />
                </MDBCol>
                <MDBCol className="col-6">
                <h5 className=" fs-4 w-100 position-absolute lawyerName text-white">דינה יסמין</h5>
                </MDBCol>
              </MDBCol>
              <MDBCol className="text-lg-end text-center " height="" md="8">
                <span className="">עורך דין בנושא הסכמי ממון</span>
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
                    <p className="m-2">ירושלים</p>
                    <p className="m-2">8 שנים</p>
                    <p className="m-2">3 שעות</p>
                    <p className="m-2">10 ימי עסקים</p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol className=" " md="8">
            <MDBRow>
              {departments.slice(0, 4).map((item, key) => (
                <MDBCol className="col-lg-5 m-2 p-0 col-12 genericCard">
                  <GenericCard
                    className=""
                    key={key}
                    name={item.subDepartments[0].name}
                    discription={item.subDepartments[0].description}
                  />
                </MDBCol>
              ))}
            </MDBRow>
            {
              
            }
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos non esse a nisi reiciendis eaque ducimus nostrum id vitae dolorem? Iure dolorum officia, veritatis quo natus perferendis ipsa ipsum architecto!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos non esse a nisi reiciendis eaque ducimus nostrum id vitae dolorem? Iure dolorum officia, veritatis quo natus perferendis ipsa ipsum architecto!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos non esse a nisi reiciendis eaque ducimus nostrum id vitae dolorem? Iure dolorum officia, veritatis quo natus perferendis ipsa ipsum architecto!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos non esse a nisi reiciendis eaque ducimus nostrum id vitae dolorem? Iure dolorum officia, veritatis quo natus perferendis ipsa ipsum architecto!
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default ProfileCard;

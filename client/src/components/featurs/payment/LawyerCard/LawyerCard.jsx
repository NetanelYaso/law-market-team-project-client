import "./LawyerCard.css";
import {useEffect} from "react";
import {
MDBContainer,
MDBCardImage,
MDBRow,
MDBCol,
MDBListGroup,
MDBListGroupItem,
MDBIcon
} from 'mdb-react-ui-kit';
import {getAll} from "../../../services/lawyersServices.js"
import { useDispatch, useSelector } from "react-redux";


const LawyerCard = ()=> {
  const dispatch = useDispatch();
 

  const Lawyers = useSelector(state => state.lawyer.allLawyers)
  useEffect(() => {
    dispatch(getAll());
  }, [])
  return (
    <div className="lawyer-card square border border-3 mb-4">
      {
        Lawyers.slice(0,1).map((item)=>(
      <MDBContainer className=' d-flex justify-content-center text-center '>
        <MDBRow>
        <MDBCol md="4" className="">
      <MDBCardImage className='rounded-circle' width='140' height='140' src={item.avatar.url} alt="" />
      </MDBCol>
      <MDBCol className="text-lg-end" height="" md="8">
      <h5 className=" fs-4">{item.name}</h5>
      <p className="">עורך דין בנושא הסכמי ממון</p>
      <p className="">הסכם ממון הינו הסכם בענייני רכוש, בין בני זוג נשואים, לא נשואים (ידועים בציבור) או בני זוג העומדים להינשא, בו מוסדרים ביניהם כל ענייני הרכוש והממון, בהתאם להעדפותיהם האישיות..</p>
      </MDBCol>
      <MDBCol>
      <MDBListGroup style={{ minWidth: '18rem' }} light className=" pe-sm-0 text-lg-end text-md-end ps-5 p-0">
      <MDBListGroupItem noBorders className="me-5 py-2">פיצוי פיטורין</MDBListGroupItem>
      <MDBListGroupItem noBorders className="me-5 py-2">דמי תברואה </MDBListGroupItem>
        </MDBListGroup>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
        ))
      }
    </div>
  );
};

export default LawyerCard;

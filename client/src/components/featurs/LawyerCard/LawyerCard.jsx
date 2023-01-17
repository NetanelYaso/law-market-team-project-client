import "./LawyerCard.css";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCardFooter,
  MDBIcon,
} from "mdb-react-ui-kit";
import Rating from "../Rating/Rating";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {choseLawyer} from "../../../store/lawyerStore"

function LawyerCard({ lawyerInfo,id }) {
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const { avatar, name, departments, reviews } = lawyerInfo;

const choseLawyer= event=>{
  dispatch(choseLawyer(event.target.id))
  navigate("/profileCard")
}

  return (
    <>
     
      <MDBCard id={id}onClick={choseLawyer} border="warning hover-shadow">
        <MDBCardImage src={avatar.url} alt="..." position="top" />
        <MDBCardBody>
          <Rating ratingNum={4} />
          <MDBCardTitle className="text-center text-dark mb-0 fs-4">
            {name}
          </MDBCardTitle>
          <MDBCardText className="text-center">{departments[0]}</MDBCardText>
        </MDBCardBody>
        <MDBCardFooter className="px-1">
          <p className="m-0 text-center fs-5">Provided by</p>
          <MDBCardText className="text-center text-muted" color="dark">
            LawMarket
            <MDBIcon color="warning" size="xs" fas icon="gavel" />
          </MDBCardText>
        </MDBCardFooter>
      </MDBCard>
    </>
  );
}

export default LawyerCard;

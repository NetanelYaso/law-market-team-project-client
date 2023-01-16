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

function LawyerCard({ lawyerInfo }) {
  const { avatar, name, departments, reviews } = lawyerInfo;
  return (
    <>
      <MDBCard border="warning hover-shadow">
        <MDBCardImage src={avatar.url} alt="..." position="top" />
        <MDBCardBody>
          <Rating ratingNum={5} />
          <MDBCardTitle className="text-center mb-0 fs-4">
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

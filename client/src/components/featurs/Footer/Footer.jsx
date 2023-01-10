import "./Footer.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter
      className="text-center text-white p-4 position-absolute  w-100"
      style={{ backgroundColor: "#1f2122" }}
    >
      <MDBContainer>
        <MDBRow>
          <MDBCol className="d-flex justify-content-center" sm="12" lg="4">
            <img
              src="/LOGO.png"
              height="50"
              className="d-inline-block align-top"
            />
          </MDBCol>
          <MDBCol className="d-flex justify-content-center" sm="12" lg="4">
            <span className="fs-6 fw-lighter text-white-50">
              &copy;חברת עורכי דין בע"מ 2019
            </span>
          </MDBCol>
          <MDBCol className="d-flex justify-content-center" sm="12" lg="4">
            <div className="d-flex">
              <span className="me-3">צור קשר</span>
              <span className="me-3">עלינו</span>
              <span className="me-3">מה כותבים בעיתונות</span>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;

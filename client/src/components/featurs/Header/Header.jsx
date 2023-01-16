import { Nav, Container, Navbar } from "react-bootstrap";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import {useSelector} from "react-redux"
import {useUserAuth} from '../../../context/googleAuth'
function Header() {
  let userFromDb = useSelector((state)=>state.user) ;
  let {user} = useUserAuth()

  return (
    <div id="header" className="text-white">
      <Navbar className="shadow-0">
        <Container className="mb-5">
          <Navbar.Brand href="#home">
            <img
              src="/LOGO.png"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Nav>
            <Nav.Link className="text-white">צור קשר</Nav.Link>
            <Nav.Link href="/login" className="text-white">
              התחבר
            </Nav.Link>
            {user||userFromDb ?(<Nav.Link  className="text-white">
              <div
                className="rounded-circle bg-light d-flex justify-content-center align-items-center"
                style={{
                  color: "#08b9e3",
                  width: "3rem",
                  height: "3rem",
                  bottom: 0,
                  right: 0,
                  transform: "translate(2%, -16%)"
                }}
              ><i class="fas fa-user-alt "></i></div>
            </Nav.Link>):(console.log()) }
  
  
          </Nav>
        </Container>
      </Navbar>
      <Container className="mb-4 d-flex justify-content-center">
        <h1 className="fw-lighter text-center">
          עורכי דין הטובים בתחום במקום אחד
        </h1>
      </Container>
      <Container className="pb-5 d-flex justify-content-center">
        <SearchBar
          extraProps={"d-none d-md-flex"}
          placeholder="חפש את התחום בו אתה צריך עזרה"
        />
        <SearchBar extraProps={"d-flex d-md-none"} placeholder="חיפוש" />
      </Container>
    </div>
  );
}

export default Header;

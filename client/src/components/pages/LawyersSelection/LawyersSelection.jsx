import "./LawyersSelection.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInputGroup,
  MDBIcon,
} from "mdb-react-ui-kit";
import SearchBar from "../../featurs/SearchBar/SearchBar";
import LawyerCard from "../../featurs/LawyerCard/LawyerCard";
import { useState,useEffect } from "react";
import  {useDispatch,useSelector} from "react-redux";
import  {getAll} from "../../services/lawyersServices"

const infoArray = [
  {
    pic: "https://picsum.photos/200/200",
    fullName: "Or1 Gadamo",
    department: "Family etc",
    rating: 5,
  },
  {
    pic: "https://picsum.photos/200/200",
    fullName: "Or2 Gadamo",
    department: "Family etc",
    rating: 5,
  },
  {
    pic: "https://picsum.photos/200/200",
    fullName: "Or3 Gadamo",
    department: "Family etc",
    rating: 5,
  },
  {
    pic: "https://picsum.photos/200/200",
    fullName: "Or4 Gadamo",
    department: "Family etc",
    rating: 5,
  },
  {
    pic: "https://picsum.photos/200/200",
    fullName: "Or5 Gadamo",
    department: "Family etc",
    rating: 5,
  },
  {
    pic: "https://picsum.photos/200/200",
    fullName: "Or6 Gadamo",
    department: "Family etc",
    rating: 5,
  },
  {
    pic: "https://picsum.photos/200/200",
    fullName: "Or7 Gadamo",
    department: "Family etc",
    rating: 5,
  },
  {
    pic: "https://picsum.photos/200/200",
    fullName: "Or8 Gadamo",
    department: "Family etc",
    rating: 5,
  },
  {
    pic: "https://picsum.photos/200/200",
    fullName: "Or9 Gadamo",
    department: "Family etc",
    rating: 5,
  },
  {
    pic: "https://picsum.photos/200/200",
    fullName: "Or10 Gadamo",
    department: "Family etc",
    rating: 5,
  },
];
function LawyersSelection() {

  // const dispatch = useDispatch()
  // const Lawyers = useSelector(state => state.lawyers.allLawyers)
  // useEffect(() => {
  //   dispatch(getAll())
  // },[])

  const [lawyersArr, setLawyersArr] = useState(infoArray);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (value) => {
    setLawyersArr(
      infoArray.filter((lawyer) =>
        lawyer.fullName.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  return (
    <>
      <MDBContainer className="py-5">
        <h1 className="text-center text-black-50 pb-3">GET A LAWYER</h1>
        <MDBContainer className="d-flex justify-content-center pb-3">
          <MDBInputGroup
            className={`w-50 bg-light`}
            textBefore={<MDBIcon fas icon="search" />}
          >
            <input
              className="form-control"
              type="search"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                handleSearch(e.target.value);
              }}
              placeholder={"search for a lawyer"}
            />
          </MDBInputGroup>
        </MDBContainer>
        <MDBRow>
          {lawyersArr.slice(0, 10).map((info) => {
            return (
              <MDBCol className="pb-3" sm={12} md={6} lg={4} xl={3}>
                <LawyerCard lawyerInfo={info} />
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default LawyersSelection;

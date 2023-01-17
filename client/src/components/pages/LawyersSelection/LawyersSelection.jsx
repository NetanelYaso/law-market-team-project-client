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
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../services/lawyersServices"
import Map from "../../featurs/Map/Map";


function LawyersSelection() {

  const dispatch = useDispatch()
  const Lawyers = useSelector(state => state.lawyer.allLawyers)
  useEffect(() => {
    dispatch(getAll());
  }, [])

  useEffect(() => {
    setLawyersArr(Lawyers)
  }, [Lawyers])
  console.log(Lawyers);
  const [lawyersArr, setLawyersArr] = useState(Lawyers);
  console.log(lawyersArr);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (value) => {
    setLawyersArr(
      Lawyers.filter((lawyer) =>
        lawyer.name.toLowerCase().includes(value.toLowerCase())
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
          {lawyersArr.map((info) => {
            return (
              <MDBCol className="pb-3" sm={12} md={6} lg={4} xl={3}>
                <LawyerCard lawyerInfo={info} />
              </MDBCol>
            );
          })}
        </MDBRow>
        <MDBRow>
          {/* {lawyersArr[0] && <Map address={lawyersArr[0].location} />} */}
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default LawyersSelection;

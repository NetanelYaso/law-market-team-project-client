import "./SearchBar.css";
import { MDBIcon, MDBInputGroup } from "mdb-react-ui-kit";

function SearchBar({ placeholder, extraProps }) {
  return (
    <>
      <MDBInputGroup
        className={`w-75 bg-light ${extraProps ? extraProps : ""}`}
        textAfter={<MDBIcon fas icon="search" />}
      >
        <input
          className="form-control text-end"
          type="search"
          placeholder={placeholder}
        />
      </MDBInputGroup>
    </>
  );
}

export default SearchBar;

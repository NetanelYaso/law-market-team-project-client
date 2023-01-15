import "./PageNotFound.css";
import React from "react";
import { Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
function PageNotFound() {
  const navigate = useNavigate()
  const linkTo = () => {
    navigate("/")
  }

  return (
    <div className="page_not_found mt-5">
      <img src="https://i.giphy.com/media/H54feNXf6i4eAQubud/giphy.webp" alt="" />
      <Button onClick={linkTo} className="mt-5">חזרה</Button>
    </div>
  );
};

export default PageNotFound;

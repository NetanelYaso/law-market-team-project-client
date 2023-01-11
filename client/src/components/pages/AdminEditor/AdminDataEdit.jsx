import "./AdminDataEdit.css";
import React from "react";
import {
  MDBContainer,
} from "mdb-react-ui-kit";
import LawyerForm from "../../featurs/lawyerForm/lawyerForm";
import DepartmentForm from "../../featurs/departmentForm/departmentForm";

function AdminEditor() {
  return (
    <div className="admin-data-edit">
      <MDBContainer className="w-75">
        <DepartmentForm/>
        <LawyerForm/>
      </MDBContainer>
    </div>
  );
}

export default AdminEditor;

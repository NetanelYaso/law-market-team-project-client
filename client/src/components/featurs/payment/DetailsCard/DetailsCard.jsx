import "./DetailsCard.css";
import React, { useState, useEffect } from "react";
import LawyerCard from "./../LawyerCard/LawyerCard";
import PaymentCard from "./../PaymentCard/PaymentCard";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBInput,
  MDBCheckbox,
  MDBRadio,
  MDBTextArea,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter
} from "mdb-react-ui-kit";

const DetailsCard = () => {
  const [basicActive, setBasicActive] = useState("tab1");

  const [sideOne, setSideOne] = useState({});
  const [sideTwo, setSideTwo] = useState({})

  const [popUp, setPopUp] = useState(false);

  const toggleShow = () =>setPopUp(!popUp);


const changeInputs = (e)=>{
    setSideTwo({...sideTwo,[e.target.name]:e.target.value})
}

const handleInputs =()=>{
        setPopUp(!popUp)
    localStorage.setItem("sideTwo",JSON.stringify(sideTwo))
}


  const changeDetails = (e) => {
    setSideOne({ ...sideOne, [e.target.name]:e.target.value });
  };

  const handleSubmit = ()=>{
    setPopUp(!popUp)
    localStorage.setItem("sideOne",JSON.stringify(sideOne))
  }

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <div className="details-card  justify-content-center mt-4">
      <MDBContainer className=" w-100 ">
        <MDBRow className=" mb-3">
          <MDBCol md="6" className="">
            <LawyerCard />
            <PaymentCard />
          </MDBCol>
          <MDBCol className=" square border border-3 details-col" md="6">
            <img
              className="img-details w-100 rounded"
              height="200"
              src="https://www.schindlers.co.za/wp-content/uploads/2020/06/person-signing-paper-955393.jpg"
              alt="..."
            />
            <p className="details-p">
            <span className=" fs-5 fw-bold details-span">הסכם ממון בין הצדדים</span>
            <br />
              הסכם ממון הוא חוזה בין בני זוג, המבקשים לעגן בצורה מסודרת, את הפן
              הכספי ביחסיהם. החוזה קובע את אופן חלוקת הרכוש בין בני הזוג במקרה
              של פרידה ומביא לוודאות משפטית, אשר תורמת לחיי זוגיות מאושרים, ללא
              חששות מאינטרסים כלכליים.
            </p>
            <MDBTabs className="mb-3 d-flex justify-content-center">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab1")}
                  active={basicActive === "tab1"}
                  className="tabs"
                >
                  פרטי צד א
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab2")}
                  active={basicActive === "tab2"}
                  className="tabs"
                >
                  פרטי צד ב
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
            <MDBTabsContent className="">
              <MDBTabsPane show={basicActive === "tab1"}>
                <form
                  className=""
                  onSubmit={(e)=>e.preventDefault()}
                >
                  <MDBInput
                    id="firstName"
                    wrapperClass="mb-4"
                    label="שם פרטי"
                    name="firstName"
                    required
                    onChange={(e) => changeDetails(e)}
                  />
                  <MDBInput
                    id="lastName"
                    wrapperClass="mb-4"
                    label="שם משפחה"
                    name="lastName"
                    required
                    onChange={(e) => changeDetails(e)}
                  />
                  <MDBInput
                    type="email"
                    id="form4Example2"
                    wrapperClass="mb-4"
                    label="אמייל"
                    name="email"
                    required
                    onChange={(e) => changeDetails(e)}
                  />
                  <MDBInput
                    type="date"
                    wrapperClass="mb-4"
                    label="תאריך לידה"
                    name="birth"
                    required
                    onChange={(e) => changeDetails(e)}
                  />
                  מגדר
                  <br />
                  <MDBRadio
                    className="mb-4 radio"
                    id="inlineRadio1"
                    label="זכר"
                    inline
                    name="gender"
                    value="male"
                    required
                    onChange={(e) => changeDetails(e)}
                  />
                  <MDBRadio
                    className="mb-4 radio"
                    id="inlineRadio2"
                    label="נקבה"
                    inline
                    name="gender"
                    value="female"
                    required
                    onChange={(e) => changeDetails(e)}
                  />
                  <MDBTextArea
                    label="הודעה"
                    id="textAreaExample"
                    rows={4}
                    className="mb-4"
                    name="message"
                    required
                    onChange={(e) => changeDetails(e)}
                  />
                  <MDBBtn onClick={()=>handleSubmit()} type="submit" className="mb-4 btn-save" block>
                    שמור
                  </MDBBtn>
                </form>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive === "tab2"}>
                {" "}
                <form onSubmit={(e)=>e.preventDefault()}>
                  <MDBInput
                    id="firstName"
                    wrapperClass="mb-4"
                    label="שם פרטי"
                    name="firstName"
                    required
                    onChange={(e) => changeInputs(e)}
                  />
                  <MDBInput
                    id="lastName"
                    wrapperClass="mb-4"
                    label="שם משפחה"
                    name="lastName"
                    required
                    onChange={(e) => changeInputs(e)}
                  />
                  <MDBInput
                    type="email"
                    id="form4Example2"
                    wrapperClass="mb-4"
                    label="אמייל"
                    name="email"
                    required
                    onChange={(e) => changeInputs(e)}
                  />
                  <MDBInput
                    type="date"
                    wrapperClass="mb-4"
                    label="תאריך לידה"
                    name="birth"
                    required
                    onChange={(e) => changeInputs(e)}
                  />
                  מגדר
                  <br />
                  <MDBRadio
                    className="mb-4"
                    name="gender"
                    id="inlineRadio1"
                    value="male"
                    label="זכר"
                    inline
                    required
                    onChange={(e) => changeInputs(e)}
                  />
                  <MDBRadio
                    className="mb-4"
                    name="gender"
                    id="inlineRadio2"
                    value="female"
                    label="נקבה"
                    inline
                    required
                    onChange={(e) => changeInputs(e)}
                  />
                  <MDBTextArea
                    label="הודעה"
                    id="textAreaExample"
                    rows={4}
                    className="mb-4"
                    name="message"
                    required
                    onChange={(e) => changeInputs(e)}
                  />
                  <MDBBtn onClick={()=>handleInputs()} type="submit" className="mb-4 btn-save" block>
                    שמור
                  </MDBBtn>
                </form>
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


                      {/* alert user Status */}
      <MDBModal show={popUp} setShow={setPopUp} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody><h1 style={{color:"green"}}>Success</h1></MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default DetailsCard;

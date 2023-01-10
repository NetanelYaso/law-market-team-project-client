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
} from "mdb-react-ui-kit";

const DetailsCard = () => {
  const [basicActive, setBasicActive] = useState("tab1");

  const [details, setDetails] = useState({});
  const [inputs, setInputs] = useState({})

const changeInputs = (e)=>{
  setInputs({...inputs,[e.target.name]:e.target.value})
}

const handleInputs =()=>{
  localStorage.setItem("inputs",JSON.stringify(inputs))
}


  const changeDetails = (e) => {
    setDetails({ ...details, [e.target.name]:e.target.value });
  };

  const handleSubmit = ()=>{
    localStorage.setItem("details",JSON.stringify(details))
  }

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <div className="details-card  justify-content-center mt-4">
      <MDBContainer className=" w-100 ">
        <MDBRow className=" mb-3">
          <MDBCol className=" square border border-3 details-col" md="6">
            <img
              className="img-details w-100 rounded"
              height="200"
              src="https://www.schindlers.co.za/wp-content/uploads/2020/06/person-signing-paper-955393.jpg"
              alt="..."
            />
            <span className=" fs-5 fw-bold">הסכם ממון בין הצדדים</span>
            <p>
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
                >
                  פרטי צד א
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab2")}
                  active={basicActive === "tab2"}
                >
                  פרטי צד ב
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
            <MDBTabsContent className="">
              <MDBTabsPane show={basicActive === "tab1"}>
                <form
                  className=" "
                >
                  <MDBInput
                    id="firstName"
                    wrapperClass="mb-4"
                    label="firstName"
                    name="firstName"
                    onChange={(e) => changeDetails(e)}
                  />
                  <MDBInput
                    id="lastName"
                    wrapperClass="mb-4"
                    label="lastName"
                    name="lastName"
                    onChange={(e) => changeDetails(e)}
                  />
                  <MDBInput
                    type="email"
                    id="form4Example2"
                    wrapperClass="mb-4"
                    label="Email address"
                    name="email"
                    onChange={(e) => changeDetails(e)}
                  />
                  <MDBInput
                    type="date"
                    wrapperClass="mb-4"
                    label="date of birth"
                    name="birth"
                    onChange={(e) => changeDetails(e)}
                  />
                  gender
                  <br />
                  <MDBRadio
                    className="mb-4"
                    id="inlineRadio1"
                    label="male"
                    inline
                    name="gender"
                    value="male"
                    onChange={(e) => changeDetails(e)}
                  />
                  <MDBRadio
                    className="mb-4"
                    id="inlineRadio2"
                    label="female"
                    inline
                    name="gender"
                    value="female"
                    onChange={(e) => changeDetails(e)}
                  />
                  <MDBTextArea
                    label="Message"
                    id="textAreaExample"
                    rows={4}
                    className="mb-4"
                    name="message"
                    onChange={(e) => changeDetails(e)}
                  />
                  <MDBBtn onClick={()=>handleSubmit()} type="submit" className="mb-4 m" block>
                    שמור
                  </MDBBtn>
                </form>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive === "tab2"}>
                {" "}
                <form>
                  <MDBInput
                    id="firstName"
                    wrapperClass="mb-4"
                    label="firstName"
                    name="firstName"
                    onChange={(e) => changeInputs(e)}
                  />
                  <MDBInput
                    id="lastName"
                    wrapperClass="mb-4"
                    label="lastName"
                    name="lastName"
                    onChange={(e) => changeInputs(e)}
                  />
                  <MDBInput
                    type="email"
                    id="form4Example2"
                    wrapperClass="mb-4"
                    label="Email address"
                    name="email"
                    onChange={(e) => changeInputs(e)}
                  />
                  <MDBInput
                    type="date"
                    wrapperClass="mb-4"
                    label="date of birth"
                    name="birth"
                    onChange={(e) => changeInputs(e)}
                  />
                  gender
                  <br />
                  <MDBRadio
                    className="mb-4"
                    name="gender"
                    id="inlineRadio1"
                    value="male"
                    label="male"
                    inline
                    onChange={(e) => changeInputs(e)}
                  />
                  <MDBRadio
                    className="mb-4"
                    name="gender"
                    id="inlineRadio2"
                    value="female"
                    label="female"
                    inline
                    onChange={(e) => changeInputs(e)}
                  />
                  <MDBTextArea
                    label="Message"
                    id="textAreaExample"
                    rows={4}
                    className="mb-4"
                    name="message"
                    onChange={(e) => changeInputs(e)}
                  />
                  <MDBBtn onClick={()=>handleInputs()} type="submit" className="mb-4" block>
                    שמור
                  </MDBBtn>
                </form>
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
          <MDBCol md="6" className="">
            <LawyerCard />
            <PaymentCard />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default DetailsCard;

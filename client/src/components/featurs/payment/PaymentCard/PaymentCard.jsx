import "./PaymentCard.css";
import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,

} from 'mdb-react-ui-kit';
import ConfirmPayment from './../ConfirmPayment/ConfirmPayment';
import { useNavigate } from "react-router-dom";



const PaymentCard = ()=> {
  const [scrollableModal, setScrollableModal] = useState(false);
  const navigate = useNavigate();
  const [price,setPrice]=useState();
  const [basicActive, setBasicActive] = useState('tab1');
  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

 useEffect(()=>{
  setPrice(document.getElementById("one").innerText.slice(2))
 },[])


  return (
    <div className="payment-card square border border-3">
        <MDBContainer className=' w-100 '>
      <MDBTabs className='mb-4  d-flex justify-content-center text-center row-cols-3'>
        <MDBTabsItem className="">
          <MDBTabsLink className="" onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
          <p className=''>שירות בסיס</p>
          <p className=''>$100</p>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
          <p className=''>שירות סטנדרט</p>
          <p className=''>$175</p>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
          <p className=''>שירות פרימיום </p>
          <p className=''>$250</p>
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent className='d-flex justify-content-center w-100 '>
        <MDBTabsPane show={basicActive === 'tab1'} className="text-md-center text-lg-end">
        <p className='fs-5 fw-bold'>הסכם ממון בין 2 הצדדים<span id="one"> $100 </span></p>
        <MDBListGroup style={{ minWidth: '18rem' }} light className="d-flex justify-content-center small">
      <MDBListGroupItem noBorders>פיצויי פיטורין</MDBListGroupItem>
      <MDBListGroupItem noBorders>דמי הבראה</MDBListGroupItem>
      <MDBListGroupItem noBorders>הלנת שכר</MDBListGroupItem>
      <MDBListGroupItem noBorders>שעות נוספות</MDBListGroupItem>
        </MDBListGroup>
        <div class="d-flex align-items-center">
        <MDBBtn className=" mx-auto w-100 btn-pay mb-4" center  onClick={() => setScrollableModal(!scrollableModal)}>
        המשך לתשלום
      </MDBBtn>
      </div>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'} className=" text-md-center text-lg-end">
        <p className=' fs-5 fw-bold'>הסכם ממון בין 2 הצדדים<span id="one"> $175 </span></p>
        <MDBListGroup style={{ minWidth: '18rem' }} light className="d-flex justify-content-center small">
        <MDBListGroupItem noBorders>פיצויי פיטורין</MDBListGroupItem>
      <MDBListGroupItem noBorders>דמי הבראה</MDBListGroupItem>
      <MDBListGroupItem noBorders>הלנת שכר</MDBListGroupItem>
      <MDBListGroupItem noBorders>שעות נוספות</MDBListGroupItem>
        </MDBListGroup>
        <div class="d-flex align-items-center">
        <MDBBtn className=" mx-auto w-100 btn-pay mb-4" center  onClick={() => setScrollableModal(!scrollableModal)}>
        המשך לתשלום
      </MDBBtn>
      </div>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'} className=" text-md-center text-lg-end">
        <p className=' fs-5 fw-bold'>הסכם ממון בין 2 הצדדים<span id="one"> $250 </span></p>
        <MDBListGroup style={{ minWidth: '18rem' }} light className="d-flex justify-content-center small">
        <MDBListGroupItem noBorders>פיצויי פיטורין</MDBListGroupItem>
      <MDBListGroupItem noBorders>דמי הבראה</MDBListGroupItem>
      <MDBListGroupItem noBorders>הלנת שכר</MDBListGroupItem>
      <MDBListGroupItem noBorders>שעות נוספות</MDBListGroupItem>
        </MDBListGroup>
        <div class="d-flex align-items-center">
        <MDBBtn className=" mx-auto w-100 btn-pay mb-4" center  onClick={() => setScrollableModal(!scrollableModal)}>
        המשך לתשלום
      </MDBBtn>
      </div>
        </MDBTabsPane>
      </MDBTabsContent>
      <MDBModal className="payment-modal" show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
              <MDBModalTitle>דף תשלום</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              <ConfirmPayment price={`${price}`}/>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                סגור
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </MDBContainer>
    </div>
  );
};

export default PaymentCard;







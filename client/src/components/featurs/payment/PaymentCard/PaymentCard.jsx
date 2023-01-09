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
import ConfirmPayment from './../confirmPayment/ConfirmPayment';
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
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
          <p className=''>Basic</p>
          <p className=''>$100</p>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
          <p className=''>standard</p>
          <p className=''>$175</p>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
          <p className=''>Premium </p>
          <p className=''>$250</p>
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent className='d-flex justify-content-center w-100 '>
        <MDBTabsPane show={basicActive === 'tab1'} className="text-sm-start">
        <p className='fs-5 fw-bold'>Prenuptial agreement between the parties<span id="one"> $100 </span></p>
        <MDBListGroup style={{ minWidth: '18rem' }} light className="d-flex justify-content-center">
      <MDBListGroupItem noBorders><MDBIcon icon='check-circle' className='me-2 text-primary' />Severance pay</MDBListGroupItem>
      <MDBListGroupItem noBorders><MDBIcon icon='check-circle' className='me-2 text-primary' />convalescence pay</MDBListGroupItem>
      <MDBListGroupItem noBorders><MDBIcon icon='check-circle' className='me-2 text-primary' />holding back wages</MDBListGroupItem>
      <MDBListGroupItem noBorders><MDBIcon icon='check-circle' className='me-2 text-primary' />overtime</MDBListGroupItem>
        </MDBListGroup>
        <div class="d-flex align-items-center">
        <MDBBtn className=" mx-auto" center rounded onClick={() => setScrollableModal(!scrollableModal)}>
        Continue to payment
      </MDBBtn>
      </div>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>
        <p className=' fs-5 fw-bold'>Prenuptial agreement between the parties<span id="one"> $175 </span></p>
        <MDBListGroup style={{ minWidth: '18rem' }} light className="d-flex justify-content-center">
      <MDBListGroupItem noBorders><MDBIcon icon='check-circle' className='me-2 text-primary' />Severance pay</MDBListGroupItem>
      <MDBListGroupItem noBorders><MDBIcon icon='check-circle' className='me-2 text-primary' />convalescence pay</MDBListGroupItem>
      <MDBListGroupItem noBorders><MDBIcon icon='check-circle' className='me-2 text-primary' />holding back wages</MDBListGroupItem>
      <MDBListGroupItem noBorders><MDBIcon icon='check-circle' className='me-2 text-primary' />overtime</MDBListGroupItem>
        </MDBListGroup>
        <div class="d-flex align-items-center">
        <MDBBtn className=" mx-auto" center rounded onClick={() => setScrollableModal(!scrollableModal)}>
        Continue to payment
      </MDBBtn>
      </div>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}>
        <p className=' fs-5 fw-bold'>Prenuptial agreement between the parties<span id="one"> $250 </span></p>
        <MDBListGroup style={{ minWidth: '18rem' }} light className="d-flex justify-content-center">
      <MDBListGroupItem noBorders><MDBIcon icon='check-circle' className='me-2 text-primary' />Severance pay</MDBListGroupItem>
      <MDBListGroupItem noBorders><MDBIcon icon='check-circle' className='me-2 text-primary' />convalescence pay</MDBListGroupItem>
      <MDBListGroupItem noBorders><MDBIcon icon='check-circle' className='me-2 text-primary' />holding back wages</MDBListGroupItem>
      <MDBListGroupItem noBorders><MDBIcon icon='check-circle' className='me-2 text-primary' />overtime</MDBListGroupItem>
        </MDBListGroup>
        <div class="d-flex align-items-center">
        <MDBBtn className=" mx-auto" center rounded onClick={() => setScrollableModal(!scrollableModal)}>
        Continue to payment
      </MDBBtn>
      </div>
        </MDBTabsPane>
      </MDBTabsContent>
      <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Checkout</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
             
              <ConfirmPayment price={`${price}`}/>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                Close
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







import "./PaymentCard.css";
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';




const PaymentCard = ()=> {
  const [basicActive, setBasicActive] = useState('tab1');
  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  return (
    <div className="payment-card">
        <MDBContainer className=' w-100'>
      <MDBTabs className='mb-4  d-flex justify-content-center'>
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
      <MDBTabsContent className=''>
        <MDBTabsPane show={basicActive === 'tab1'}>
        <p className=' fs-5 text-center'>Prenuptial agreement between the parties<span>$100</span></p>
        <ul>
          <li>Severance pay</li>
          <li>convalescence pay</li>
          <li>holding back wages</li>
          <li>overtime</li>
        </ul>
        <MDBBtn type='submit' className='mb-4 w-25' block>
        Continue payment
      </MDBBtn>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>
        <p className=' fs-5 text-center'>Prenuptial agreement between the parties<span>$175</span></p>
        <ul>
          <li>Severance pay</li>
          <li>convalescence pay</li>
          <li>holding back wages</li>
          <li>overtime</li>
        </ul>
        <MDBBtn type='submit' className='mb-4 w-25' block>
        Continue payment
      </MDBBtn>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}>
        <p className=' fs-5 text-center'>Prenuptial agreement between the parties<span>$250</span></p>
        <ul>
          <li>Severance pay</li>
          <li>convalescence pay</li>
          <li>holding back wages</li>
          <li>overtime</li>
        </ul>
        <MDBBtn type='submit' className='mb-4 w-25' block>
        Continue payment
      </MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
      </MDBContainer>
    </div>
  );
};

export default PaymentCard;


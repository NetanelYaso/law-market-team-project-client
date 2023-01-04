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
  MDBRadio,
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
        <MDBContainer className=' w-50'>
      <MDBTabs className='mb-3 d-flex justify-content-center'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
          Basic
          <p className=''>$100</p>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
          standard
          <p className=''>$175</p>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
          Premium
          <p className=''>$250</p>
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent className=''>
        <MDBTabsPane show={basicActive === 'tab1'}>

        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>

        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}>
          
        </MDBTabsPane>
      </MDBTabsContent>
      </MDBContainer>
    </div>
  );
};

export default PaymentCard;


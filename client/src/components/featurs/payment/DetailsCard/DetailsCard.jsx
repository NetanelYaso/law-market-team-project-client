import "./DetailsCard.css";
import React, { useState } from 'react';
import LawyerCard from './../LawyerCard/LawyerCard';
import PaymentCard from './../PaymentCard/PaymentCard';
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
  MDBCol
} from 'mdb-react-ui-kit';


const  DetailsCard = ()=> {
  const [basicActive, setBasicActive] = useState('tab1');
  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  return (
    <div className="details-card  justify-content-center">
      <MDBContainer className=' w-100 '>
        <MDBRow className=" mb-3">
        <MDBCol className="" md="6">
      <img className="img-details w-100" height='200' src='https://www.schindlers.co.za/wp-content/uploads/2020/06/person-signing-paper-955393.jpg' alt='...' />
      <span className=' fs-5'>agreement between the sides</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia animi molestiae sit debitis nihil totam iusto distinctio natus perferendis, reiciendis, pariatur non amet, ex vitae quod quas facilis expedita!</p>
      <MDBTabs className='mb-3 d-flex justify-content-center'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            details side A
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
          details side B
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent className=''>
        <MDBTabsPane show={basicActive === 'tab1'}>   
    <form className=' '>
      <MDBInput id='firstName' wrapperClass='mb-4' label='firstName' />
      <MDBInput id='lastName' wrapperClass='mb-4' label='lastName' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
      <MDBInput type='date' wrapperClass='mb-4' label='date of birth' />
      gender 
      <br/>
      <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='male' inline />
      <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='female' inline />
      <MDBTextArea label='Message' id='textAreaExample' rows={4} />
      <MDBBtn type='submit' className='mb-4 m' block>
        save
      </MDBBtn>
    </form></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>   <form>
        <MDBInput id='firstName' wrapperClass='mb-4' label='firstName' />
      <MDBInput id='lastName' wrapperClass='mb-4' label='lastName' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
      <MDBInput type='date' wrapperClass='mb-4' label='date of birth' />
      gender 
      <br/>
      <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='male' inline />
      <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='female' inline />
      <MDBTextArea label='Message' id='textAreaExample' rows={4} />
      <MDBBtn type='submit' className='mb-4' block>
        save
      </MDBBtn>
    </form></MDBTabsPane>
      </MDBTabsContent>
      </MDBCol>
      <MDBCol md="6">
      <LawyerCard/>
      <PaymentCard/>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default DetailsCard;




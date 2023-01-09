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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState(null);
  const [message, setMessage] = useState('');

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  const onSubmitForm=(e)=>{
    e.preventDefault()
  }

  const onChangeFirstName=(e)=>{
    setFirstName(e.target.value)
  }
  const onChangeLastName=(e)=>{
    setLastName(e.target.value)
  }
  const onChangeEmail=(e)=>{
    setEmail(e.target.value)
  }
  const onChangeBirth=(e)=>{
    setBirth(e.target.value)
  }
  const onChangeGender=(e)=>{
    setGender(e.target.value)
  }

  const onChangeMessage=(e)=>{
    setMessage(e.target.value)
  }

  return (
    <div className="details-card  justify-content-center ">
      <MDBContainer className=' w-100 '>
        <MDBRow className=" mb-3">
        <MDBCol className=" square border border-3 details-col" md="6">
      <img className="img-details w-100 rounded" height='200' src='https://www.schindlers.co.za/wp-content/uploads/2020/06/person-signing-paper-955393.jpg' alt='...' />
      <span className=' fs-5 fw-bold'>agreement between the sides</span>
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
    <form className=' ' onSubmit={onSubmitForm}>
      <MDBInput id='firstName' wrapperClass='mb-4' label='firstName' value={firstName} onChange={onChangeFirstName}/>
      <MDBInput id='lastName' wrapperClass='mb-4' label='lastName' value={lastName} onChange={onChangeLastName}/>
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' value={email} onChange={onChangeEmail}/>
      <MDBInput type='date' wrapperClass='mb-4' label='date of birth' value={birth}/>
      gender 
      <br/>
      <MDBRadio className='mb-4' name='inlineRadio' id='inlineRadio1' value='option1' label='male' inline value={gender} onChange={onChangeGender}/>
      <MDBRadio className='mb-4' name='inlineRadio' id='inlineRadio2' value='option2' label='female' inline value={gender} onChange={onChangeGender}/>
      <MDBTextArea label='Message' id='textAreaExample' rows={4} className='mb-4' value={message} onChange={onChangeMessage}/>
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
      <MDBRadio className='mb-4' name='inlineRadio' id='inlineRadio1' value='option1' label='male' inline />
      <MDBRadio className='mb-4' name='inlineRadio' id='inlineRadio2' value='option2' label='female' inline />
      <MDBTextArea label='Message' id='textAreaExample' rows={4} className='mb-4' />
      <MDBBtn type='submit' className='mb-4' block>
        save
      </MDBBtn>
    </form></MDBTabsPane>
      </MDBTabsContent>
      </MDBCol>
      <MDBCol md="6" className="">
      <LawyerCard/>
      <PaymentCard/>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default DetailsCard;




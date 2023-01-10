import "./DetailsCard.css";
import React, { useState, useEffect } from 'react';
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
  const [male, setMale] = useState(null);
  const [female, setFemale] = useState(null);
  const [message, setMessage] = useState('');

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <div className="details-card  justify-content-center mt-4">
      <MDBContainer className=' w-100 '>
        <MDBRow className=" mb-3">
        <MDBCol className=" square border border-3 details-col" md="6">
      <img className="img-details w-100 rounded" height='200' src='https://www.schindlers.co.za/wp-content/uploads/2020/06/person-signing-paper-955393.jpg' alt='...' />
      <span className=' fs-5 fw-bold'>הסכם ממון בין הצדדים</span>
      <p>הסכם ממון הוא חוזה בין בני זוג, המבקשים לעגן בצורה מסודרת, את הפן הכספי ביחסיהם. החוזה קובע את אופן חלוקת הרכוש בין בני הזוג במקרה של פרידה ומביא לוודאות משפטית, אשר תורמת לחיי זוגיות מאושרים, ללא חששות מאינטרסים כלכליים.</p>
      <MDBTabs className='mb-3 d-flex justify-content-center'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            פרטי צד א
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
          פרטי צד ב
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent className=''>
        <MDBTabsPane show={basicActive === 'tab1'}>   
    <form className=' ' onSubmit={(e)=>{e.preventDefault()}}>
      <MDBInput id='firstName' wrapperClass='mb-4' label='firstName' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
      <MDBInput id='lastName' wrapperClass='mb-4' label='lastName' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <MDBInput type='date' wrapperClass='mb-4' label='date of birth' value={birth} onChange={(e)=>setBirth(e.target.value)}/>
      gender 
      <br/>
      <MDBRadio className='mb-4' name='inlineRadio' id='inlineRadio1'  label='male' inline value={male} onClick={(e)=>setMale(e.target.value)}/>
      <MDBRadio className='mb-4' name='inlineRadio' id='inlineRadio2'  label='female' inline value={female} onClick={(e)=>setFemale(e.target.value)}/>
      <MDBTextArea label='Message' id='textAreaExample' rows={4} className='mb-4' value={message} onChange={(e)=>setMessage(e.target.value)}/>
      <MDBBtn type='submit' className='mb-4 m' block>
        שמור
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
      <MDBBtn type='submit' className='mb-4' block >
        שמור
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




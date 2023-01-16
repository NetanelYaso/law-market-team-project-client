import "./confirmPayment.css";
// import React from "react";
import {
  MDBContainer,
} from "mdb-react-ui-kit";
// import PaymentCard from '../PaymentCard/PaymentCard';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const  ConfirmPayment = ({price})=> {
  return (
    <div className="ConfirmPayment">
      <MDBContainer className='text-center'>
        <PayPalScriptProvider options={{"client-id": process.env.PUBLIC_ID}}>
            <PayPalButtons 
            createOrder={(data, actions)=>{
              return actions.order.create({
                purchase_units:[
                {
                  amount: {
                    value:price,
                  },
                },
              ],
              })
            }}
            onApprove={(data, actions)=>{
              return actions.order.capture().then(function (details) {
                alert(
                  `Transaction completed by ${details.payer.name.given_name}`
                )
              })
            }}
            />
        </PayPalScriptProvider>
        </MDBContainer>
        </div>
  )
};

export default ConfirmPayment;

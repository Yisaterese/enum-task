import React from 'react';
import ConfirmPayment from "../../component/paymentConfirmed";
export default function PaymentConfirmedPage(){
    return(

       <ConfirmPayment link={'/takeAssessment'} text={'Processed to assessment'}/>
    );
}
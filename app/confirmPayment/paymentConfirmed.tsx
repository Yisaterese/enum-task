import React from 'react';
import ConfirmPayment from "../../component/paymentConfirmed";
export default function PaymentConfirmedPage(){
    return(

       <ConfirmPayment link={'takeAssessmentClicked'} text={'Processed to assessment'}/>
    );
}
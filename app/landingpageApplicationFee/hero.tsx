import React from 'react';
import Hero from "../../component/hero";
export default function ApplicationFeeHeroPage(){
    return(
        <Hero path={'/applicationFeePayment'} buttonText={'Proceed to Payment'} />
    );
}
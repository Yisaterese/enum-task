import React from 'react';
import Navbar from "../../component/navbar";
import Partners from "../../component/partners";
import Hero from "../../component/hero";
import AdmissionGranted from "../../app/landingPageAdmissionGranted/addmisionGranted";
export default function Page(){
    return(
        <div>
            <Navbar/>
            <Hero
                    heroBackButton={'/submitAssessment'}
                    path={'/makePaymentProgram'}
                    buttonText={'Proceed to Payment'}/>

            <Partners/>
            <AdmissionGranted/>
        </div>
    );
}
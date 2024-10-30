
import React from 'react';
import Navbar from "../../component/navbar";
import Hero from "../../component/hero";
import Partners from "../../component/partners";
import AdmissionGranted from "@/app/landingPageApplicationProcess/admissionProcess";
export default function Page() {
    return(
        <div>
            <Navbar/>
            <Hero heroBackButton={'/submitAssessment'}
                  path={'/landingPageAdmissionGranted'}
                  buttonText={'Processing your Application'}/>
            <Partners/>
            <AdmissionGranted/>
        </div>
    );
}
import React from 'react';
import Navbar from "../../component/navbar";
import Hero from "../../component/hero";
import Partners from "../../component/partners";
import AssessmentPage from "../../app/takeAssessment/assessment";
export default function  Page(){
    return(
        <div>
            <Navbar />
            <Hero heroBackButton={'/takeAssessmentClicked'}
                  path={'/assessmentPage'}/>
            <Partners/>
            <AssessmentPage/>
        </div>
    );
}
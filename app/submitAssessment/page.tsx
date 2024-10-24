import React from 'react';
import SubmitAssessmentPage from "@/app/submitAssessment/submitAssessment";
import AssessmentNavbar from "@/app/assessmentPage/assessmentNavbar";
export default function Page(){
    return(
        <div>
            <AssessmentNavbar/>
            <SubmitAssessmentPage/>
        </div>
    );
}
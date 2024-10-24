import React from 'react';
import SubmittedPage from "@/app/assessmentSubmitted/submittedPage";
import AssessmentNavbar from "@/app/assessmentPage/assessmentNavbar";
export default function Page(){
    return(
        <div>
            <AssessmentNavbar/>
            <SubmittedPage/>
        </div>
    );
}
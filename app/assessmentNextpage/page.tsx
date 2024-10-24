import React from 'react';
import NextPage from "@/app/assessmentNextpage/nextPage";
import AssessmentNavbar from "@/app/assessmentPage/assessmentNavbar";
export default function Page(){
    return(
        <div>
            <AssessmentNavbar/>
            <NextPage/>
        </div>
    );
}
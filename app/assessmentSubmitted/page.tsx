'use client'
import React, {useState} from 'react';
import SubmittedPage from "../../app/assessmentSubmitted/submittedPage";
import AssessmentNavbar from "../../component/assessmentNavbar";
export default function Page(){
    const [isCancelButton, setIsCancelButton] = useState(true);
    const handleCancelButtonClick = () => {
        setIsCancelButton(false);
    }

    return(
        <>
            { isCancelButton &&(
            <div>
                <AssessmentNavbar link={'/submitAssessment'} onCancel={handleCancelButtonClick} />
                <SubmittedPage/>
            </div>
            )}
        </>
    );
}
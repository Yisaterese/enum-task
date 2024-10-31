'use client'
import React, { useState } from 'react';
import SubmitAssessmentPage from "../../app/submitAssessment/submitAssessment";
import AssessmentNavbar from "../../component/assessmentNavbar";

export default function Page() {
    const [isCancelButton, setIsCancelButton] = useState(true);

    const handleCancelButton = () => {
        setIsCancelButton(false);
    };

    return (
        <>
            {isCancelButton && (
                <div>
                    <AssessmentNavbar link={'/assessmentNextpage'} onCancel={handleCancelButton} />
                    <SubmitAssessmentPage />
                </div>
            )}
        </>
    );
}

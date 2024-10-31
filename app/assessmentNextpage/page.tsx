'use client';
import React, { useState } from 'react';
import NextPage from "../../app/assessmentNextpage/nextPage";
import AssessmentNavbar from "../../component/assessmentNavbar";

export default function Page() {
    const [isCancelledButton, setIsCancelledButton] = useState(true);
    const handleIsCancelled = () => {
        setIsCancelledButton(false);
    }


    return (
        <div>
            {isCancelledButton && (
                <>
                    <AssessmentNavbar link={'/assessmentPage'} onCancel={handleIsCancelled} />
                    <NextPage />
                </>
            )}
        </div>
    );
}

'use client'
import AssessmentPage from "../../app/assessmentPage/assessment";
import AssessmentNavbar from "../../component/assessmentNavbar";
import { useState } from "react";

export default function Page() {
    const [isCanceledButton, setIsCanceledButton] = useState(true);

    const handleCancelButton = () => {
        setIsCanceledButton(false);
    };

    return (
        <div>
                {isCanceledButton && (
                        <>
                            <AssessmentNavbar  link={'/takeAssessment'} onCancel={handleCancelButton} />
                            <AssessmentPage />
                        </>)
                }
        </div>
    );
}

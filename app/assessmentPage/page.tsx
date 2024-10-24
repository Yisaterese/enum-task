import AssessmentPage from "@/app/assessmentPage/assessment";
import AssessmentNavbar from "@/app/assessmentPage/assessmentNavbar";

export default function Page(){
    return(
        <div>
           <AssessmentNavbar/>
            <AssessmentPage/>
        </div>
    );
}
import React from 'react';
import {AssessmentGrantedProps} from "@/types/types";
import Image from "next/image";
import submitAssessmentImage from '../public/takeAssessment/submitAssessmentImage.png';
const AssessmentGranted:React.FC<AssessmentGrantedProps>=({image = submitAssessmentImage,text})=>{
    return(
        <div className={'bg-[#F0FF7] text-green-500]'}>
            <Image src={image} alt={'image'}/>
            <p>{text}</p>
        </div>
    );
}
export default AssessmentGranted;
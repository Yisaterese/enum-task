import React from 'react';
import {AssessmentGrantedProps} from "@/types/types";
import Image from "next/image";
import submitAssessmentImage from '../public/takeAssessment/submitAssessmentImage.png';
const AssessmentProcess:React.FC<AssessmentGrantedProps>=({image = submitAssessmentImage,text,style})=>{
    return(
        <div className={`bg-green-400 w-full flex gap-2 ] ${style}`}>
            <Image src={image} alt={'image'} className={'h-5 w-5]'}/>
            <p className={'text-green-500'}>{text}</p>
        </div>
    );
}
export default AssessmentProcess;
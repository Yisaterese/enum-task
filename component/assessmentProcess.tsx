import React from 'react';
import { AssessmentGrantedProps } from "@/types/types";
import Image from "next/image";

const AssessmentProcess: React.FC<AssessmentGrantedProps> = ({ image, text, style }) => {
    return (
        <div className={`w-full  py-3 ${style}`} style={{ backgroundColor: '#D3F8E7' }}>
            <div className=" flex justify-center  gap-2">
                {image && <Image src={image} alt="image" className={'w-5 h-3'} />}
                <p className="text-green-500">{text}</p>
            </div>
        </div>
    );
}

export default AssessmentProcess;

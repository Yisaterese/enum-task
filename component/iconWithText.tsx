import React from "react";
import Image from 'next/image';
import { ProgramSectionProps } from "@/types/types";

const IconWithText: React.FC<ProgramSectionProps> = ({ image, word,className}) => {
    return (
        <div className={`flex items-center  ${className}`}>
            {image && <Image src={image} alt={word}  className={''}/>}
            <p>{word}</p>
        </div>
    );
};

export default IconWithText;

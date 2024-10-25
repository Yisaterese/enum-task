import {StaticImageData} from "next/image";

export type ProgramSectionProps = {
    image?: StaticImageData;
    word: string;
    className?: string;
};

export type ButtonProps={
    icon?: StaticImageData;
    word:string;
    className?: string;
}

export type RatingProps ={
    applicationFee: string;
    programFee: string;
    button: string;
    classname?: string;
}

export type AssessmentGrantedProps ={
    image?: StaticImageData;
    text: string;
    style?:string;
}
